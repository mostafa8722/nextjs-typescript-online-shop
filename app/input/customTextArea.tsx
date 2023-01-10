import * as React from "react"

const CustomTextArea = (props: any) => {
	const { placeholder, style, onChange, value } = props
	return (
		<textarea
			aria-label="minimum height"
			onChange={onChange}
			placeholder={placeholder}
			style={style}
			value={value}
		/>
	)
}

export default CustomTextArea
