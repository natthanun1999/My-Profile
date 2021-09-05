import Image from 'next/image'

const style = {
  textIndent: {
    'text-indent': '2rem'
  }
}

function Contact() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="flex-col hero-content lg:flex-row-reverse mb-7">
        <Image
          src="https://picsum.photos/id/1005/600/600"
          className="max-w-sm rounded-lg shadow-2xl"
          width={600}
          height={600}
          alt="profile" />
        <div>
          <h1 className="mb-5 text-5xl font-bold">
            Contact
          </h1> 
          <p className="mb-2" style={style.textIndent}>
            My name is Natthanun Thanomrod. I am from Thailand and I am a full-stack website developer. I enjoy writing code and fix some HUGE of bugs.
          </p> 
          <p className="mb-5" style={style.textIndent}>
            I love to learn new things to create some useful stuff for everyone who used my products. And I hope you will enjoy my profile.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact
