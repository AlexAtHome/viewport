import { FC } from "preact/compat"
import { Github } from "react-bootstrap-icons"

export const Header: FC = () => {
  const githubUrl = 'https://github.com/alexathome/viewport'
  return <header class="flex justify-end">
    <a href={githubUrl} rel="nofollow noreferrer noopener" target="_blank" aria-label="Source code on Github">
      <Github size={32} title="Source code on Github" />
    </a>
  </header>
}
