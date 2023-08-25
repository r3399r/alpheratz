import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import IcAvatar from 'src/image/avatar.png';
import { Log } from 'src/model/backend/model/entity/logEntity';
import { User } from 'src/model/backend/model/entity/userEntity';
import { getData } from 'src/service/userSerice';

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

const UserList = () => {
  const [log, setLog] = useState<Log[]>();
  const [user, setUser] = useState<User[]>();
  const [selected, setSeclted] = useState<string>('');

  useEffect(() => {
    getData().then((res) => {
      setLog(res.log);
      setUser(res.user);
    });
  }, []);

  const handleChange = (event: SelectChangeEvent) => {
    setSeclted(event.target.value as string);
  };

  const onClick = (id: string) => () => {
    setSeclted(id);
  };

  if (!user || !log) return <>loading...</>;

  return (
    <div className="m-4">
      <div className="w-[300px]">
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
      <div className="mt-4 flex flex-col gap-2 rounded bg-red-50/60">
        <div className="flex items-center gap-2 p-2 text-center font-bold">
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
          <div key={v.id} onClick={onClick(v.user.id)} className="cursor-pointer">
            <div className="flex items-center gap-2 p-2 text-center">
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
  );
};

export default UserList;
