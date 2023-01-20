const SkillItem = ({ imgUrl, text }) => {
  return (
    <div className='w-32 h-12 flex gap-8 items-center'>
      <div className='rounded-full h-full aspect-square bg-black'>
        <img
          src={`${imgUrl}`}
          alt='img'
        />
      </div>
      <p>{text}</p>
    </div>
  )
}

export default SkillItem
