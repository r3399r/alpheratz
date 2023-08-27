import { Button, Tab, Tabs } from '@mui/material';
import { SyntheticEvent, useEffect, useState } from 'react';
import { Config, Stage } from 'src/model/backend/model/Config';
import { getConfig, setConfig } from 'src/service/configService';
import FormData from './FormData';

const Editor = () => {
  const [formData, setFormData] = useState<Config>();
  const [tab, setTab] = useState<number>(0);

  useEffect(() => {
    getConfig().then((res) => setFormData(res));
  }, []);

  const handleTabChange = (event: SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  const onSave = () => {
    if (formData) setConfig(formData);
  };

  if (!formData) return <></>;

  return (
    <div className="p-10">
      <Button variant="contained" onClick={onSave}>
        Save
      </Button>
      <Tabs value={tab} onChange={handleTabChange}>
        <Tab label="主線" />
        <Tab label="火" />
        <Tab label="水" />
        <Tab label="土" />
        <Tab label="風" />
        <Tab label="以太" />
      </Tabs>
      {tab === 0 && (
        <FormData
          data={formData.main}
          setData={(stage: Stage[]) => setFormData({ ...formData, main: stage })}
        />
      )}
      {tab === 1 && (
        <FormData
          data={formData.fire}
          setData={(stage: Stage[]) => setFormData({ ...formData, fire: stage })}
        />
      )}
      {tab === 2 && (
        <FormData
          data={formData.water}
          setData={(stage: Stage[]) => setFormData({ ...formData, water: stage })}
        />
      )}
      {tab === 3 && (
        <FormData
          data={formData.earth}
          setData={(stage: Stage[]) => setFormData({ ...formData, earth: stage })}
        />
      )}
      {tab === 4 && (
        <FormData
          data={formData.air}
          setData={(stage: Stage[]) => setFormData({ ...formData, air: stage })}
        />
      )}
      {tab === 5 && (
        <FormData
          data={formData.aether}
          setData={(stage: Stage[]) => setFormData({ ...formData, aether: stage })}
        />
      )}
      <Button variant="contained" onClick={onSave}>
        Save
      </Button>
    </div>
  );
};

export default Editor;
