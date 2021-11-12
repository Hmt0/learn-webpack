import Link from "next/link"
import Router from "next/router"

export default function Home() {
  function gotoRay() {
    Router.push("./pageB?name=小瑞")
  }
  return (
    <div>
      <Link href="/pageA?name=大瑞">
        找大瑞
      </Link>
      <button onClick={gotoRay}>
        <a>
          找小瑞
        </a>
      </button>
      <Link href="/time">
        看时间
      </Link>
    </div>
  )
}
