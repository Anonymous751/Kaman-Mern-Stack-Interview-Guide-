import React from "react";
import { Card, Row, Col } from "react-bootstrap";


const TutorialRoadmap = ({
    title,
    description,
    pages,
    goal
}) => {


return (

<Card className="mb-5 shadow-sm border-0 tutorial-roadmap">

<Card.Body>


<div className="text-center mb-5">

<h2 className="fw-bold">
🚀 {title}
</h2>


<p className="text-muted mb-0">
{description}
</p>

</div>



<Row className="g-4">


{
pages.map((page,index)=>(


<Col
key={index}
xl={6}
lg={6}
md={6}
sm={12}
>


<Card className="
h-100
shadow-sm
transition-all
duration-500
ease-in-out
hover:scale-105
hover:-translate-y-3
hover:shadow-2xl
hover:bg-gradient-to-r
hover:from-blue-50
hover:via-purple-50
hover:to-pink-50
hover:ring-2
hover:ring-blue-500
hover:ring-offset-2
cursor-pointer
rounded-4
border-2
">


<Card.Body>


<div className="d-flex justify-content-between align-items-center mb-3">


<h4 className={page.color || ""}>

📄 Page {index + 1}

</h4>



<span className={`badge bg-${page.badge || "primary"}`}>

{page.steps || "6 Steps"}

</span>


</div>



<ul className="roadmap-list">

{
page.items.map((item,i)=>(

<li key={i}>
{item}
</li>

))
}

</ul>


</Card.Body>


</Card>


</Col>


))

}


</Row>





<div className="alert alert-primary mt-5 text-center">


<h5 className="mb-3">
🎯 Learning Goal
</h5>


<p className="mb-3">

{goal}

</p>



<button className="btn btn-primary px-4">

🚀 Start Learning

</button>


</div>



</Card.Body>

</Card>


);

};


export default TutorialRoadmap;