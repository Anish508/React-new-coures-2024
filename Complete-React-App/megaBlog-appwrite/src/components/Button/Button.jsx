import React from 'react'

function Button(
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  ...props
) {
  return (
    <div>
      <Button className = {`px-4 py-2 rounded-lg ${className} ${bgColor} ${textColor}`} {...props}>
        {children}
      </Button>
    </div>
  )
}

export default Button
