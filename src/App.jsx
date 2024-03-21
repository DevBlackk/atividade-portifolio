import { Card } from "./components/Card";
import { ProjectCard } from "./components/ProjectCard";

import "./global.css"

export function App() {
  return (
      <div>
        <Card name="Davidson" email="davi@gmail.com" description="Hello World" />
        <br />
        <ProjectCard title="Bio Tech API" link="https://github.com/Gleison-dev/biotechApi.git" description="API que ajuda produtores." />
        <ProjectCard title="Bio Tech API" link="https://github.com/Gleison-dev/biotechApi.git" description="API que ajuda produtores." />
        <ProjectCard title="Bio Tech API" link="https://github.com/Gleison-dev/biotechApi.git" description="API que ajuda produtores." />
        <ProjectCard title="Bio Tech API" link="https://github.com/Gleison-dev/biotechApi.git" description="API que ajuda produtores." />
        <ProjectCard title="Bio Tech API" link="https://github.com/Gleison-dev/biotechApi.git" description="API que ajuda produtores." />
        <ProjectCard title="Bio Tech API" link="https://github.com/Gleison-dev/biotechApi.git" description="API que ajuda produtores." />
        <ProjectCard title="Bio Tech API" link="https://github.com/Gleison-dev/biotechApi.git" description="API que ajuda produtores." />
        <ProjectCard title="Bio Tech API" link="https://github.com/Gleison-dev/biotechApi.git" description="API que ajuda produtores." />
        <ProjectCard title="Bio Tech API" link="https://github.com/Gleison-dev/biotechApi.git" description="API que ajuda produtores." />
        <ProjectCard title="Bio Tech API" link="https://github.com/Gleison-dev/biotechApi.git" description="API que ajuda produtores." />
      </div>
  )
}