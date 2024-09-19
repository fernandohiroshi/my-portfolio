import Box from '../bento/Box'

const About = () => {
  return (
    <Box className="col-span-12 flex flex-col justify-evenly gap-4 duration-500 ease-in-out hover:text-amber-500 md:col-span-8 lg:gap-0">
      <h2 className="text-2xl font-medium tracking-widest">About me:</h2>
      <p className="text-justify text-xs text-foreground opacity-80 md:text-sm">
        Hello, I&apos;m Fernando Hiroshi (武田広司) I&apos;m a web developer with a focus on front-end, with expertise
        in TypeScript, React, Next.js, Tailwind, and Sass. I have advanced proficiency in Japanese, with over 10 years
        of experience living in Japan, providing a multicultural perspective and adaptability.
        <br /> <br />
        Technical proficiency in English: basic reading/writing. Graduated from the Front-End Engineer course at the
        British School of Arts and Technology (EBAC). Additional knowledge in React Native, Node.js, Redux, Axios,
        Docker, Cypress testing, and currently improving skills in MongoDB, Prisma, and AWS. 🇧🇷 🇯🇵 🇺🇸
      </p>
    </Box>
  )
}

export default About
