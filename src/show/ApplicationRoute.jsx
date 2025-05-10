import { Lava } from 'Images';

const ApplicationRoot = () => {
  return (
    <div className='relative h-screen w-screen overflow-hidden'>
      <Lava className='pointer-events-none absolute top-[-25%] left-0 z-0 h-[100%] w-full blur-3xl' />

      <div className='relative z-10 flex h-full w-full items-center justify-center'>
        <h1 className='text-4xl font-bold text-white'>This is My Architecture Repo</h1>
      </div>
    </div>
  );
};

export default ApplicationRoot;
