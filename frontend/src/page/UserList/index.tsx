import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { format } from 'date-fns';
import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IcAvatar from 'src/image/avatar.png';
import { Log } from 'src/model/backend/model/entity/logEntity';
import { User } from 'src/model/backend/model/entity/userEntity';
import { getLog, getUser } from 'src/service/userService';

const mappingAction = {
  follow: '加好友',
  unfollow: '封鎖',
  message: '傳訊息',
};

const mappingType = {
  pass: '過關',
  fail: '失敗',
  hint: '提示',
};

const DEFAULT_LIMIT = 50;

const UserList = () => {
  const navigate = useNavigate();
  const [log, setLog] = useState<Log[]>();
  const [user, setUser] = useState<User[]>();
  const [selected, setSelected] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [offset, setOffset] = useState<number>(0);
  const [count, setCount] = useState<number>();

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
  }, [selected, offset]);

  const handleChange = (event: SelectChangeEvent) => {
    setSelected(event.target.value as string);
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

  if (!user || !log || !count) return <></>;

  return (
    <div className="m-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-[180px]">
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
                    <div className="flex items-center gap-2">
                      <img
                        src={v.pictureUrl ?? IcAvatar}
                        className="max-w-[24px] rounded-full object-cover"
                      />
                      <div>{v.name}</div>
                    </div>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div>
            <Button variant="outlined" onClick={onReset}>
              Reset
            </Button>
          </div>
        </div>
        <Button variant="contained" onClick={() => navigate('/editor')}>
          編輯關卡
        </Button>
      </div>
      <div className="min-w-[800px] overflow-x-auto">
        <div className="mt-4 rounded bg-red-50/60">
          <div className="flex items-center gap-2 p-2 font-bold">
            <div className="w-1/6">玩家</div>
            <div className="w-1/12">動作</div>
            <div className="w-1/12">類別</div>
            <div className="w-1/6">訊息</div>
            <div className="w-1/6">主線/支線</div>
            <div className="w-1/6">關卡</div>
            <div className="w-1/6">時間</div>
          </div>
          <div className="h-px bg-gray-300" />
          {log.map((v, i) => (
            <div key={v.id} onClick={onClickUser(v.user.id)} className="cursor-pointer">
              <div className="flex items-center gap-2 p-2">
                <div className="flex w-1/6 items-center gap-2">
                  <img
                    src={v.user.pictureUrl ?? IcAvatar}
                    className="max-w-[36px] rounded-full object-cover"
                  />
                  <div>{v.user.name}</div>
                </div>
                <div className="w-1/12">{mappingAction[v.action]}</div>
                <div className="w-1/12">{v.type ? mappingType[v.type] : ''}</div>
                <div className="w-1/6">{v.message}</div>
                <div className="w-1/6">{v.attribute}</div>
                <div className="w-1/6">{v.newValue}</div>
                <div className="w-1/6">
                  {format(new Date(v.createdAt ?? ''), 'yyyy-MM-dd HH:mm:ss')}
                </div>
              </div>
              {i !== log.length - 1 && <div className="h-px bg-gray-300" />}
            </div>
          ))}
        </div>
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
