import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import { format } from 'date-fns';
import { ChangeEvent, useEffect, useState } from 'react';
import IcAvatar from 'src/image/avatar.png';
import { Log } from 'src/model/backend/model/entity/logEntity';
import { User } from 'src/model/backend/model/entity/userEntity';
import { getLog, getUser, updateType } from 'src/service/userService';

const mappingAction = {
  follow: '加好友',
  unfollow: '封鎖',
  message: '傳訊息',
};

const DEFAULT_LIMIT = 50;
let timeoutId: NodeJS.Timeout;

const UserList = () => {
  const [log, setLog] = useState<Log[]>();
  const [user, setUser] = useState<User[]>();
  const [selected, setSelected] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [offset, setOffset] = useState<number>(0);
  const [count, setCount] = useState<number>();
  const [refresh, setRefresh] = useState<boolean>(false);

  useEffect(() => {
    getUser().then((res) => setUser(res));
  }, []);

  useEffect(() => {
    getLog({ limit: String(DEFAULT_LIMIT), offset: String(offset), userId: selected }).then(
      (res) => {
        setLog(res.log);
        setCount(res.count);
      },
    );
  }, [selected, offset, refresh]);

  const handleChange = (event: SelectChangeEvent) => {
    setSelected(event.target.value);
  };

  const onReset = () => {
    setSelected('');
    setPage(1);
    setOffset(0);
  };

  const onClickUser = (id: string) => () => {
    setSelected(id);
    setPage(1);
    setOffset(0);
  };

  const handlePaginationChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
    setOffset((value - 1) * DEFAULT_LIMIT);
  };

  const onTypeChange = (id: string) => (event: ChangeEvent<HTMLInputElement>) => {
    const type = event.target.value;
    const newLogs = (log ?? []).map((v) => {
      if (v.messageId !== id || v.message === null) return v;

      return { ...v, message: { ...v.message, type } };
    });
    setLog(newLogs);

    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => updateType(id, type), 2000);
  };

  if (!user || !log || count === undefined) return <></>;

  return (
    <div className="m-4">
      <h3>歷史紀錄</h3>
      <p>
        點擊玩家名稱或點選玩家選單可以過濾出單一玩家的歷史紀錄；點擊 RESET 會回到未過濾的清單；點擊
        REFRESH 會重新讀取清單
      </p>
      <p>
        可以直接於「訊息標籤」的輸入框打字設定訊息標籤，以方便檢視，此為一次性操作，只要接收到一樣的訊息都會設為相同標籤，而其他新接收到的未定義訊息將被預設為「失敗」
      </p>
      <div className="flex items-center gap-4">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">玩家</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selected}
            label="玩家"
            onChange={handleChange}
          >
            {user.map((v) => (
              <MenuItem key={v.id} value={v.id}>
                <div className="flex items-center gap-4">
                  <img
                    src={v.pictureUrl ?? IcAvatar}
                    className="max-w-[30px] rounded-full object-cover"
                  />
                  <div>{v.name}</div>
                </div>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <div>
          <Button variant="outlined" onClick={onReset}>
            Reset
          </Button>
        </div>
        <div>
          <Button variant="outlined" onClick={() => setRefresh(!refresh)}>
            Refresh
          </Button>
        </div>
      </div>
      <div className="mt-4 rounded bg-red-50/60">
        <div className="flex items-center gap-2 p-2 font-bold">
          <div className="w-1/4">玩家</div>
          <div className="w-1/4">事件/訊息</div>
          <div className="w-1/4">訊息標籤</div>
          <div className="w-1/4 text-end">時間戳記</div>
        </div>
        <div className="h-px bg-gray-300" />
        {log.map((v, i) => (
          <div key={v.id}>
            <div className="flex items-center gap-2 p-2">
              <div
                className="flex w-1/4 cursor-pointer flex-col items-center gap-2 sm:flex-row"
                onClick={onClickUser(v.user.id)}
              >
                <img
                  src={v.user.pictureUrl ?? IcAvatar}
                  className="max-w-[36px] rounded-full object-cover"
                />
                <div className="text-center">{v.user.name}</div>
              </div>
              <div className="w-1/4">{v.message?.message ?? mappingAction[v.action]}</div>
              <div className="w-1/4">
                {v.message && (
                  <TextField onChange={onTypeChange(v.message.id)} value={v.message.type} />
                )}
              </div>
              <div className="w-1/4 text-end">
                {format(new Date(v.createdAt ?? ''), 'yyyy-MM-dd HH:mm:ss')}
              </div>
            </div>
            {i !== log.length - 1 && <div className="h-px bg-gray-300" />}
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center">
        <Pagination
          count={Math.ceil(count / DEFAULT_LIMIT)}
          page={page}
          onChange={handlePaginationChange}
        />
      </div>
    </div>
  );
};

export default UserList;
