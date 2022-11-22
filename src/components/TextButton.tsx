import Link from 'next/link'

const TextButton = (props: any) => {
  return (
    <>
      {props.onClick ? (
        <button
          {...props}
          type="button"
          className="block h-10 rounded-full px-3 leading-10 text-primary transition hover:bg-surface-8 focus:bg-surface-12 active:bg-surface-12"
        >
          {props.children}
        </button>
      ) : (
        <Link
          {...props}
          className="block h-10 rounded-full px-3 leading-10 text-primary transition hover:bg-surface-8 focus:bg-surface-12 active:bg-surface-12"
        >
          {props.children}
        </Link>
      )}
    </>
  )
}

export default TextButton
