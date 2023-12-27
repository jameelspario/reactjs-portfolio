import React from 'react'

const About = () => {
    return (
        <div name="about"
            className='w-full bg-gradient-to-b from-black to-gray-800 text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <p className='text-xl mt-20'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas sapiente assumenda laudantium! Ducimus, accusantium exercitationem! Dolorum, perspiciatis mollitia soluta, aut consectetur maiores ex perferendis excepturi inventore molestias magnam ipsam repudiandae iusto. Voluptatum, excepturi sint quisquam voluptates id reprehenderit possimus harum maxime dolore tempore deleniti vitae iure nesciunt totam porro sequi.
                </p>
                <br />
                <p className='text-xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quos natus at. Voluptate eum labore, consequuntur tenetur itaque veritatis quo quaerat delectus dolorum illum voluptas voluptatem. Saepe dolores animi, earum modi reprehenderit ullam aperiam cupiditate repellendus odio fuga nisi suscipit, architecto incidunt voluptatibus. Necessitatibus ipsum beatae aut, velit ab architecto?
                </p>
            </div>
        </div>
    )
}

export default About