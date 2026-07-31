// FileUpload.jsx
// Full page: Live File Upload UI + Inline Tutorial
// Explanation + Arrow Flow + Code blocks

import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import TutorialPagination from "../../components/TutorialPagination";
import BackButton from "../../components/BackButton";
import { Col, Row } from "react-bootstrap";
import TutorialRoadmap from "../../components/TutorialRoadmap";



const fileUploadPages = [

{
badge:"primary",
items:[
"📁 What is File Upload?",
"🔄 How File Upload Works",
"📦 Understanding multipart/form-data",
"⚙️ What is Multer?",
"🚀 Multer Upload Flow",
"📄 File Object Structure"
]
},


{
badge:"success",
items:[
"📤 Single File Upload",
"📚 Multiple File Upload",
"✅ File Validation",
"📏 File Size Limits",
"📂 Handling Uploaded Files",
"⚙️ Common Multer Options"
]
},


{
badge:"warning",
items:[
"🗄 What is MongoDB GridFS?",
"❓ Why Use GridFS?",
"🏗 GridFS Storage Architecture",
"📤 Upload Files Using GridFS",
"📥 Download Files From GridFS",
"🗑 Delete Files From GridFS"
]
},


{
badge:"danger",
items:[
"⚛ Connect React Frontend",
"🔄 File Upload Flow Diagram",
"⚠ Common Mistakes",
"✅ Best Practices",
"💼 Interview Questions",
"🚀 Complete File Upload Flow"
]
}

];


const FileUpload = () => {


    const [file, setFile] = useState(null);

    const [currentPage, setCurrentPage] = useState(1);


    const stepsPerPage = 6;

    const totalSteps = 24;

    const [preview, setPreview] = useState(null);


    const handleFileChange = (e) => {

        const selectedFile = e.target.files[0];


        if (!selectedFile) return;


        setFile(selectedFile);


        // Image Preview
        if (selectedFile.type.startsWith("image/")) {

            const imageUrl = URL.createObjectURL(selectedFile);

            setPreview(imageUrl);

        }
        else {

            setPreview(null);

        }

    };



    const uploadFile = () => {

        if (!file) {

            alert("Please select file");

            return;

        }

    };



    return (

        <Container className="my-5">


            <h2 className="mb-4">
                File Upload — Live Example + Step-by-step Tutorial
            </h2>

            <BackButton />



            {/* LIVE UI */}

            <Card className="mb-4">

                <Card.Body>


                    <h4>
                        Live File Upload Example
                    </h4>



                    <Form.Group className="mb-3">


                        <Form.Label>
                            Select File
                        </Form.Label>


                        <Form.Control

                            type="file"

                            onChange={handleFileChange}

                        />


                    </Form.Group>





                    {
                        file &&

                        <Card className="mb-3">


                            <Card.Body>


                                <h6>
                                    Selected File
                                </h6>



                                {
                                    preview &&

                                    <img

                                        src={preview}

                                        alt="preview"

                                        style={{

                                            width: "200px",

                                            height: "200px",

                                            objectFit: "cover",

                                            borderRadius: "10px"

                                        }}

                                    />

                                }



                                <p className="mt-3">

                                    <strong>Name:</strong> {file.name}

                                </p>



                                <p>

                                    <strong>Type:</strong> {file.type}

                                </p>



                                <p>

                                    <strong>Size:</strong> {(file.size / 1024).toFixed(2)} KB

                                </p>



                            </Card.Body>


                        </Card>

                    }




                    <Button

                        onClick={uploadFile}

                        disabled={!file}

                    >

                        Upload File

                    </Button>



                </Card.Body>


            </Card>

<TutorialRoadmap

title="File Upload & Multer Backend Roadmap"

description="
Complete this tutorial page by page to build a complete
File Upload system using React, Express, Multer, MongoDB and GridFS.
"

pages={fileUploadPages}

goal="
Finish all four pages and you will understand how to build
a complete File Upload system from frontend to storage.
"

/>





            {/* TUTORIAL */}

            <h3 className="mt-5">
                Tutorial — File Upload
            </h3>


            {currentPage === 1 && (
                <>


                    {/* STEP 1 */}

                    <Card className="mb-3">

                        <Card.Body>


                            <h5>
                                1. What is File Upload?
                            </h5>


                            <p>
                                File upload allows users to select and send files to backend.
                            </p>



                            <SyntaxHighlighter
                                language="javascript"
                                style={oneDark}
                            >

                                {`
Select File

      ↓

Create File Object

      ↓

Send File

      ↓

Store File
`}

                            </SyntaxHighlighter>



                            <SyntaxHighlighter
                                language="javascript"
                                style={oneDark}
                            >

                                {`
<input
 type="file"
 onChange={(e)=>{

   const file = e.target.files[0];

   console.log(file);

 }}
/>
`}

                            </SyntaxHighlighter>



                        </Card.Body>

                    </Card>







                    {/* STEP 2 */}

                    <Card className="mb-3">

                        <Card.Body>


                            <h5>
                                2. How File Upload Works
                            </h5>


                            <p>
                                File object is converted into FormData and sent to server.
                            </p>



                            <SyntaxHighlighter
                                language="javascript"
                                style={oneDark}
                            >

                                {`
React

 ↓

File Input

 ↓

File Object

 ↓

FormData

 ↓

HTTP Request

 ↓

Backend Server
`}

                            </SyntaxHighlighter>




                            <SyntaxHighlighter
                                language="javascript"
                                style={oneDark}
                            >

                                {`
const formData = new FormData();


formData.append(
 "file",
 selectedFile
);


axios.post(
 "/upload",
 formData
);
`}

                            </SyntaxHighlighter>



                        </Card.Body>

                    </Card>







                    {/* STEP 3 */}

                    <Card className="mb-3">

                        <Card.Body>


                            <h5>
                                3. Understanding multipart/form-data
                            </h5>


                            <p>
                                Files require multipart/form-data instead of JSON.
                            </p>



                            <SyntaxHighlighter
                                language="javascript"
                                style={oneDark}
                            >

                                {`
File

 ↓

multipart/form-data

 ↓

HTTP Request

 ↓

Express Server
`}

                            </SyntaxHighlighter>




                            <SyntaxHighlighter
                                language="javascript"
                                style={oneDark}
                            >

                                {`
const data = new FormData();


data.append(
 "image",
 file
);


fetch("/upload",{

 method:"POST",

 body:data

});
`}

                            </SyntaxHighlighter>



                        </Card.Body>

                    </Card>








                    {/* STEP 4 */}

                    <Card className="mb-3">

                        <Card.Body>


                            <h5>
                                4. What is Multer?
                            </h5>


                            <p>
                                Multer is Express middleware used to process uploaded files.
                            </p>



                            <SyntaxHighlighter
                                language="javascript"
                                style={oneDark}
                            >

                                {`
Uploaded File

      ↓

Express Route

      ↓

Multer Middleware

      ↓

req.file

      ↓

Save File
`}

                            </SyntaxHighlighter>




                            <SyntaxHighlighter
                                language="javascript"
                                style={oneDark}
                            >

                                {`
const multer = require("multer");


const upload = multer({

 storage: multer.diskStorage({

  destination:"uploads/",

  filename:(req,file,cb)=>{

    cb(
      null,
      file.originalname
    );

  }

 })

});


app.post(
 "/upload",
 upload.single("file"),
 (req,res)=>{

  console.log(req.file);

 }
);
`}

                            </SyntaxHighlighter>



                        </Card.Body>

                    </Card>








                    {/* STEP 5 */}

                    <Card className="mb-3">

                        <Card.Body>


                            <h5>
                                5. Multer Upload Flow
                            </h5>


                            <p>
                                Multer receives the file before controller execution.
                            </p>



                            <SyntaxHighlighter
                                language="javascript"
                                style={oneDark}
                            >

                                {`
Client

 ↓

FormData

 ↓

POST Request

 ↓

Multer

 ↓

req.file

 ↓

Storage
`}

                            </SyntaxHighlighter>




                            <SyntaxHighlighter
                                language="javascript"
                                style={oneDark}
                            >

                                {`
router.post(
 "/upload",

 upload.single("file"),

 (req,res)=>{

   const file = req.file;


   res.json({

    message:"File Uploaded",

    file

   });

 }

);
`}

                            </SyntaxHighlighter>



                        </Card.Body>

                    </Card>








                    {/* STEP 6 */}

                    <Card className="mb-3">

                        <Card.Body>


                            <h5>
                                6. File Object Structure
                            </h5>


                            <p>
                                Multer stores uploaded file details inside req.file.
                            </p>



                            <SyntaxHighlighter
                                language="javascript"
                                style={oneDark}
                            >

                                {`
Uploaded File

      ↓

fieldname

      ↓

originalname

      ↓

mimetype

      ↓

size

      ↓

filename

      ↓

path
`}

                            </SyntaxHighlighter>




                            <SyntaxHighlighter
                                language="javascript"
                                style={oneDark}
                            >

                                {`
req.file = {

 fieldname:"file",

 originalname:"photo.png",

 mimetype:"image/png",

 size:204800,

 filename:"photo-123.png",

 path:"uploads/photo-123.png"

};
`}

                            </SyntaxHighlighter>



                        </Card.Body>

                    </Card>


                </>
            )}



            {/* PAGE 2 */}

            {currentPage === 2 && (
                <>


                    {/* STEP 7 */}

                    <Card className="mb-3">

                        <Card.Body>


                            <h5>
                                7. Single File Upload
                            </h5>


                            <p>
                                Upload one file using Multer <code>single()</code>.
                            </p>


                            <p>
                                Select File → FormData → POST Request → Multer.single() → req.file → Save File
                            </p>



                            <SyntaxHighlighter
                                language="javascript"
                                style={oneDark}
                            >

                                {`
const upload = multer({
  storage
});


app.post(
  "/upload",

  upload.single("file"),

  (req,res)=>{

    console.log(req.file);

    res.send(
      "File Uploaded"
    );

  }
);
`}

                            </SyntaxHighlighter>


                        </Card.Body>

                    </Card>







                    {/* STEP 8 */}

                    <Card className="mb-3">

                        <Card.Body>


                            <h5>
                                8. Multiple File Upload
                            </h5>


                            <p>
                                Upload multiple files using Multer <code>array()</code>.
                            </p>


                            <p>
                                Multiple Files → FormData → Request → Multer.array() → req.files
                            </p>



                            <SyntaxHighlighter
                                language="javascript"
                                style={oneDark}
                            >

                                {`
app.post(

 "/upload",

 upload.array(
   "files",
   5
 ),

 (req,res)=>{

   console.log(
     req.files
   );

   res.send(
    "Files Uploaded"
   );

 }

);
`}

                            </SyntaxHighlighter>


                        </Card.Body>

                    </Card>







                    {/* STEP 9 */}

                    <Card className="mb-3">

                        <Card.Body>


                            <h5>
                                9. File Validation
                            </h5>


                            <p>
                                Validate file type before accepting upload.
                            </p>


                            <p>
                                Upload File → Check Type → Check Extension → Accept / Reject
                            </p>



                            <SyntaxHighlighter
                                language="javascript"
                                style={oneDark}
                            >

                                {`
const upload = multer({

 fileFilter:(req,file,cb)=>{


  if(
    file.mimetype === "image/png"
  ){

    cb(null,true);

  }
  else{

    cb(null,false);

  }


 }

});
`}

                            </SyntaxHighlighter>


                        </Card.Body>

                    </Card>







                    {/* STEP 10 */}

                    <Card className="mb-3">

                        <Card.Body>


                            <h5>
                                10. File Size Limits
                            </h5>


                            <p>
                                Limit maximum upload file size.
                            </p>


                            <p>
                                Upload File → Check Size → Compare Limit → Allow / Reject
                            </p>



                            <SyntaxHighlighter
                                language="javascript"
                                style={oneDark}
                            >

                                {`
const upload = multer({

 limits:{

   fileSize:
   2 * 1024 * 1024

 }

});
`}

                            </SyntaxHighlighter>


                        </Card.Body>

                    </Card>







                    {/* STEP 11 */}

                    <Card className="mb-3">

                        <Card.Body>


                            <h5>
                                11. Handling Uploaded Files
                            </h5>


                            <p>
                                Uploaded file information is available inside <code>req.file</code>.
                            </p>


                            <p>
                                Multer → req.file → Read Data → Save Path → Database
                            </p>



                            <SyntaxHighlighter
                                language="javascript"
                                style={oneDark}
                            >

                                {`
app.post(

 "/upload",

 upload.single("file"),

 async(req,res)=>{


   const filePath =
   req.file.path;


   console.log(
    filePath
   );


 }

);
`}

                            </SyntaxHighlighter>


                        </Card.Body>

                    </Card>







                    {/* STEP 12 */}

                    <Card className="mb-3">

                        <Card.Body>


                            <h5>
                                12. Common Multer Options
                            </h5>


                            <p>
                                Multer options control storage, filtering and limits.
                            </p>


                            <p>
                                Multer → storage → fileFilter → limits → destination → filename
                            </p>



                            <SyntaxHighlighter
                                language="javascript"
                                style={oneDark}
                            >

                                {`
const upload = multer({

 storage,

 fileFilter,

 limits

});
`}

                            </SyntaxHighlighter>


                        </Card.Body>

                    </Card>



                </>
            )}


            {currentPage === 3 && (
                <>


                    {/* STEP 13 */}

                    <Card className="mb-3">

                        <Card.Body>


                            <h5>
                                13. What is MongoDB GridFS?
                            </h5>


                            <p>
                                GridFS is a MongoDB system used to store large files
                                like images, videos and documents.
                            </p>


                            <p>
                                Large File → Split Into Chunks → Store In MongoDB → Retrieve File
                            </p>



                            <SyntaxHighlighter
                                language="javascript"
                                style={oneDark}
                            >

                                {`
const { GridFSBucket } = require("mongodb");


const bucket = new GridFSBucket(
  database,
  {
    bucketName:"uploads"
  }
);
`}

                            </SyntaxHighlighter>


                        </Card.Body>

                    </Card>








                    {/* STEP 14 */}

                    <Card className="mb-3">

                        <Card.Body>


                            <h5>
                                14. Why Use GridFS?
                            </h5>


                            <p>
                                GridFS stores files larger than MongoDB document limit
                                and manages file chunks automatically.
                            </p>


                            <p>
                                Large File → Split Chunks → Store Metadata → Retrieve When Needed
                            </p>



                            <SyntaxHighlighter
                                language="javascript"
                                style={oneDark}
                            >

                                {`
MongoDB Document Limit

        ↓

GridFS

        ↓

files Collection

        ↓

chunks Collection
`}

                            </SyntaxHighlighter>


                        </Card.Body>

                    </Card>








                    {/* STEP 15 */}

                    <Card className="mb-3">

                        <Card.Body>


                            <h5>
                                15. GridFS Storage Architecture
                            </h5>


                            <p>
                                GridFS stores file information in two collections.
                            </p>


                            <p>
                                File → files Collection + chunks Collection
                            </p>



                            <SyntaxHighlighter
                                language="javascript"
                                style={oneDark}
                            >

                                {`
uploads.files

{
 filename:"image.png",
 length:204800,
 contentType:"image/png"
}



uploads.chunks

{
 files_id:ObjectId,
 data:Binary
}
`}

                            </SyntaxHighlighter>


                        </Card.Body>

                    </Card>








                    {/* STEP 16 */}

                    <Card className="mb-3">

                        <Card.Body>


                            <h5>
                                16. Upload Files Using GridFS
                            </h5>


                            <p>
                                GridFS uploads files using upload stream.
                            </p>


                            <p>
                                File → Read Stream → GridFS Bucket → Store Chunks
                            </p>



                            <SyntaxHighlighter
                                language="javascript"
                                style={oneDark}
                            >

                                {`
const uploadStream =
bucket.openUploadStream(
 "profile.png"
);


fs.createReadStream(
 "profile.png"
)
.pipe(uploadStream);
`}

                            </SyntaxHighlighter>


                        </Card.Body>

                    </Card>








                    {/* STEP 17 */}

                    <Card className="mb-3">

                        <Card.Body>


                            <h5>
                                17. Download Files From GridFS
                            </h5>


                            <p>
                                GridFS provides download streams to read stored files.
                            </p>


                            <p>
                                File ID → GridFS Bucket → Download Stream → Response
                            </p>



                            <SyntaxHighlighter
                                language="javascript"
                                style={oneDark}
                            >

                                {`
app.get(
 "/file/:filename",

 async(req,res)=>{


 const downloadStream =
 bucket.openDownloadStreamByName(
   req.params.filename
 );


 downloadStream.pipe(res);


 }
);
`}

                            </SyntaxHighlighter>


                        </Card.Body>

                    </Card>








                    {/* STEP 18 */}

                    <Card className="mb-3">

                        <Card.Body>


                            <h5>
                                18. Delete Files From GridFS
                            </h5>


                            <p>
                                GridFS can remove files using file ObjectId.
                            </p>


                            <p>
                                File ID → Find File → Delete From GridFS
                            </p>



                            <SyntaxHighlighter
                                language="javascript"
                                style={oneDark}
                            >

                                {`
app.delete(
 "/file/:id",

 async(req,res)=>{


 await bucket.delete(
   new ObjectId(
    req.params.id
   )
 );


 res.send(
  "File Deleted"
 );


 }
);
`}

                            </SyntaxHighlighter>


                        </Card.Body>

                    </Card>



                </>
            )}



            {currentPage === 4 && (
                <>


                    {/* STEP 19 */}

                    <Card className="mb-3">

                        <Card.Body>


                            <h5>
                                19. Connect React Frontend
                            </h5>


                            <p>
                                React sends selected files to backend using FormData.
                            </p>


                            <p>
                                Flow: React File Input → File Object → FormData → API Request
                            </p>



                            <SyntaxHighlighter
                                language="javascript"
                                style={oneDark}
                            >

                                {`
import axios from "axios";


const uploadFile = async()=>{


 const formData = new FormData();


 formData.append(
   "file",
   selectedFile
 );


 await axios.post(
   "/upload",
   formData
 );


};
`}

                            </SyntaxHighlighter>


                        </Card.Body>

                    </Card>








                    {/* STEP 20 */}

                    <Card className="mb-3">

                        <Card.Body>


                            <h5>
                                20. File Upload Flow Diagram
                            </h5>


                            <p>
                                Complete file upload communication between frontend and backend.
                            </p>


                            <p>
                                Flow: React → FormData → Express → Multer → Storage → Response
                            </p>



                            <SyntaxHighlighter
                                language="javascript"
                                style={oneDark}
                            >

                                {`
const uploadFile = async()=>{


 const formData = new FormData();


 formData.append(
   "file",
   file
 );


 const response = await axios.post(
   "/api/upload",
   formData
 );


 console.log(
   response.data
 );


};
`}

                            </SyntaxHighlighter>


                        </Card.Body>

                    </Card>








                    {/* STEP 21 */}

                    <Card className="mb-3">

                        <Card.Body>


                            <h5>
                                21. Common Mistakes
                            </h5>


                            <p>
                                Avoid common mistakes while implementing file uploads.
                            </p>


                            <p>
                                Flow: Validate Field Name → Check FormData → Verify Backend Route
                            </p>



                            <SyntaxHighlighter
                                language="javascript"
                                style={oneDark}
                            >

                                {`
// Backend

upload.single(
 "file"
)


// Frontend

formData.append(
 "file",
 selectedFile
);
`}

                            </SyntaxHighlighter>




                            <p>
                                Frontend field name and backend field name must match.
                            </p>


                            <SyntaxHighlighter
                                language="javascript"
                                style={oneDark}
                            >

                                {`
const formData = new FormData();


formData.append(
 "file",
 file
);


axios.post(
 "/upload",
 formData
);
`}

                            </SyntaxHighlighter>


                        </Card.Body>

                    </Card>








                    {/* STEP 22 */}

                    <Card className="mb-3">

                        <Card.Body>


                            <h5>
                                22. Best Practices
                            </h5>


                            <p>
                                Follow secure and scalable file upload practices.
                            </p>


                            <p>
                                Flow: Validate File → Limit Size → Rename File → Store Securely
                            </p>



                            <SyntaxHighlighter
                                language="javascript"
                                style={oneDark}
                            >

                                {`
const upload = multer({

 limits:{

  fileSize:
  5 * 1024 * 1024

 },


 fileFilter:(req,file,cb)=>{


  if(
    file.mimetype.startsWith(
      "image/"
    )
  ){

    cb(null,true);

  }
  else{

    cb(null,false);

  }


 }

});
`}

                            </SyntaxHighlighter>


                        </Card.Body>

                    </Card>








                    {/* STEP 23 */}

                    <Card className="mb-3">

                        <Card.Body>


                            <h5>
                                23. Interview Questions
                            </h5>


                            <p>
                                Common file upload interview questions.
                            </p>



                            <SyntaxHighlighter
                                language="javascript"
                                style={oneDark}
                            >

                                {`
Q1. What is Multer?

Answer:
Multer is Express middleware
used for multipart/form-data.


Q2. Why use FormData?

Answer:
FormData sends files
and text data together.


Q3. What is GridFS?

Answer:
GridFS stores large files
inside MongoDB.
`}

                            </SyntaxHighlighter>


                        </Card.Body>

                    </Card>








                    {/* STEP 24 */}

                    <Card className="mb-3">

                        <Card.Body>


                            <h5>
                                24. Complete File Upload Flow
                            </h5>


                            <p>
                                Complete architecture of file upload system.
                            </p>


                            <p>
                                Flow: Frontend → Backend → Validation → Storage → Database → Response
                            </p>



                            <SyntaxHighlighter
                                language="javascript"
                                style={oneDark}
                            >

                                {`
app.post(

 "/upload",

 upload.single(
  "file"
 ),

 async(req,res)=>{


  const file = req.file;


  await File.create({

    name:file.filename,

    path:file.path

  });


  res.json({

    message:
    "Upload Successful"

  });


 }

);
`}

                            </SyntaxHighlighter>


                        </Card.Body>

                    </Card>



                </>
            )}





            <TutorialPagination

                currentPage={currentPage}

                setCurrentPage={setCurrentPage}

                totalSteps={totalSteps}

                stepsPerPage={stepsPerPage}

            />

        </Container>

    );

};


export default FileUpload;