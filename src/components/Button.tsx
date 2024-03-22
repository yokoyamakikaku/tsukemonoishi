interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}

export default function Button (props: ButtonProps) {
  return (
    <button className="bg-black text-white py-2 px-3 rounded" {...props} />
  )
}
