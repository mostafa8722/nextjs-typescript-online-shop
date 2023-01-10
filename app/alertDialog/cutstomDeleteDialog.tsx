import * as React from "react"

import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"

import { styled } from "@mui/system"
import { TiDelete } from "react-icons/ti"

const DialogTitleEl = styled("div")(
	() => `
 height:40px;
 width:400px;
 border-bottom: 0.1rem solid red;
 display:flex;
 align-items:center;
 justify-content:end;
 padding:0px 10px;
`
)
const TiDeleteEl = styled(TiDelete)(
	() => `

color:red;
font-size:1.5rem;
cursor:pointer;
margin:0px 10px;

`
)

const DialogEl = styled(Dialog)(
	() => `
display:flex;
flex-direction:column;


`
)

const DialogContentEl = styled("div")(
	() => `
   height:70px;
`
)

const DialogTextEl = styled("span")(
	() => `
   color:red;
`
)

const DialogActionsEl = styled(DialogActions)(
	() => `
display:flex;
flex-direction:row-reverse;
`
)

const ButtonEl = styled(DialogActions)<{ color: string }>(
	({ color }) => `
  color:${color};
  font-family: 'Vazir Light'!important;
  cursor:pointer;
`
)
const CustomDeleteDialog = (props: any) => {
	const { open, handleClose, alertInfo } = props

	return (
		<div>
			<DialogEl
				open={open}
				keepMounted
				onClose={handleClose}
				aria-describedby="alert-dialog-slide-description"
			>
				<DialogTitleEl>
					<DialogTextEl>{alertInfo.text}</DialogTextEl>
					<TiDeleteEl onClick={() => handleClose(false)} />
				</DialogTitleEl>
				<DialogContentEl></DialogContentEl>
				<DialogActionsEl>
					<ButtonEl color="#ff2200" onClick={() => handleClose(true)}>
						بله
					</ButtonEl>
					<ButtonEl color="#898989" onClick={() => handleClose(false)}>
						بی خیال
					</ButtonEl>
				</DialogActionsEl>
			</DialogEl>
		</div>
	)
}
export default CustomDeleteDialog
