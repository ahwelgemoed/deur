// Hook that connects to local database based on the entities provided

import { useEffect, useState } from 'react';
import { DataSource, ObjectLiteral, Repository } from 'typeorm/browser';

import { init } from './init';

export const useLocalDatabase = () => {
  const [dataSource, setDataSource] = useState<DataSource>();

  useEffect(() => {
    const initDataSource = async () => {
      const dataSource = await init();
      setDataSource(dataSource);
    };
    initDataSource();

    return () => {
      dataSource?.destroy();
    };
  }, []);

  return dataSource;
};
// const authorRepo = source.getRepository(Author);

export function useLocalSource<T>(entity: new () => T): [Repository<ObjectLiteral> | undefined, T] {
  const createdEntity = new entity();
  const [repository, setRepository] = useState<Repository<ObjectLiteral> | undefined>();
  const dataSource = useLocalDatabase();

  useEffect(() => {
    const foundRepo = dataSource?.getRepository(entity);
    setRepository(foundRepo);

    return () => {
      dataSource?.destroy();
    };
  }, [dataSource]);

  return [repository, createdEntity];
}
