import Link from "next/link"
import Router from "next/router"
import dynamic from "next/dynamic"
import Head from "next/head"

const One = dynamic(import("../components/Mycomponent"))

export default function Home() {
  function gotoRay() {
    Router.push("./pageB?name=小瑞")
  }
  return (
    <div>
      <Head>
        <title>bito</title>
        <meta charSet="utf-8"/>
      </Head>
      <One />
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
