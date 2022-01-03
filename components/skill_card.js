export default function SkillCard({ color, link, name, description, icon, percent }) {
  return (
    <div className='rounded-md' style={{
      backgroundColor: color,
    }}>
      <a className='flex md:flex-col xl:flex-row items-center p-8 rounded-t-md bg-black bg-opacity-0 hover:bg-opacity-10 text-white'
         href={link}>
        <div className='w-16 h-16'>
          {icon}
        </div>

        <div className='flex flex-col flex-grow items-center ml-4 md:ml-0 xl:ml-8'>
          <div className='flex flex-col items-center'>
            <h4 className='text-4xl'>{name}</h4>
            <p className='text-xl text-white text-opacity-80 whitespace-nowrap overflow-hidden'>{description}</p>
          </div>
        </div>
      </a>

      <div className='rounded-b-md h-2'>
        <div className='h-full bg-white bg-opacity-30' style={{
          width: `${percent ?? 0}%`,
        }} />
      </div>
    </div>
  )
}