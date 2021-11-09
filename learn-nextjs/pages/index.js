import Link from "next/link"

export default function Home() {
  return (
    <div>
      <Link href="/pageA">
        go to pageA
      </Link>
      <Link href="./pageB">
        <a>
          go to pageB
        </a>
      </Link>
    </div>
  )
}
