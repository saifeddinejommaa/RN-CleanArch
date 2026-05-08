import DocumentTypeCode from "./DocumentTypeCode";

type MyDocuent = {
    id: number,
    documentTypeCode: DocumentTypeCode ,
    validatedDate: Date,
    fileName:string,
}

export default MyDocuent;