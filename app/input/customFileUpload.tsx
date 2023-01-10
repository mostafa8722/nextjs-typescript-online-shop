import { styled } from "@mui/material"

import { BiImageAdd } from "react-icons/bi"
import { FaTrash } from "react-icons/fa"
import CustomImageViewer from "../customImageViewer"
const FileEl = styled("div")(
	() => `
   height:80px;
   width:80px;
   border:0.08rem solid #ddd;
   border-radius:0.2rem;
   margin:10px 20px;
   position:relative;
   overflow:hidden;
   display:flex;
   align-items:center;
   justify-content:center;
   cursor:pointer;
`
)
const InputEl = styled("input")(
	() => `
 position:absolute;
 width:100%;
 height:100%;
 opacity:0;
 cursor:pointer;

`
)
const MdCloudUploadEl = styled(BiImageAdd)(
	() => `
font-size:2.4rem;
color:#ccc;
`
)

const FaTrashEl = styled(FaTrash)(
	() => `
font-size:2rem;
color:red;
z-index:1;
pointer;
`
)
const ImageViewEl = styled(CustomImageViewer)(
	() => `
position:absolute;
width:100%;
height:100%;
opacity:0.75;
object-fit: cover;

`
)

const CustomFileUpload = (props: any) => {
	const { handleEvent, handleSrc, src } = props

	const uploadFileIndex = (e: any) => {
		let files = e.target.files
		let files_name = e.target.files[0]
		let src: any = ""
		if (files) {
			var files_count = files.length
			for (let i = 0; i < files_count; i++) {
				var reader = new FileReader()
				reader.onload = (e: any) => {
					src = e.target.result // HERE
					let ext = e.target.result.split("/")[1].split(";")[0].toLowerCase()

					let fileExtensionImage = ["jpeg", "jpg", "png"]
					if (!fileExtensionImage.includes(ext)) {
						//ToastError("خطا در فرمت فایل! ");
						// ToastError("فرمت های مجاز  : "+fileExtensionImage.join(', '),"warning");
						return
					}

					if (src != "") {
						//this.state.image_uploaded.push({src:e.target.result,filename:files_name})
						handleSrc(src)
						console.log(src)
						console.log("a", src)
						console.log("b", files_name)
						handleEvent(files_name)
					}

					//  document.getElementById('image-upload-box').appendChild(document.getElementById('file-upload-1'));
				}

				reader.readAsDataURL(files[i])
			}
		}
	}

	return (
		<FileEl>
			{src ? (
				<>
					<ImageViewEl src={src} />

					<FaTrashEl onClick={() => handleSrc("")} />
				</>
			) : (
				<>
					<InputEl type="file" onChange={uploadFileIndex} />

					<MdCloudUploadEl />
				</>
			)}
		</FileEl>
	)
}
export default CustomFileUpload
