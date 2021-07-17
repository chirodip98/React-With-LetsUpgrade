import React ,{useState} from 'react';
import Icons from "./Components/Icons"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Container,Card,CardBody,Row,Col, CardTitle} from 'reactstrap';
import { FaRegCircle, FaTimes } from 'react-icons/fa';


const maze=new Array(9).fill("");
const App =() =>{

    let [isCross, setCross]=useState(true);
    let flag=false;
    let [select ,setSelect]=useState(false)
    let [winMssg ,setWinMssg]=useState("");


    const makeSaveCross=()=>
    {
            setSelect(true);
            setCross(true);

    }

    const makeSaveCircle=()=>
    {
            setSelect(true);
            setCross(false);
    }



    const selection=()=>
    {
       return(
       <Container>
           <Row className="justify-content-md-center">
               <Col sm={8}>
                <Card>
                    <CardBody>
                        <CardTitle style={{textAlign:"center"}}>Select The Marker to Begin The Game</CardTitle>
                        <div className="btn-card">
                        <Button onClick={()=>{makeSaveCross()}}><FaTimes /></Button>
                        <Button onClick={()=>{makeSaveCircle()}}><FaRegCircle /></Button>
                        </div>
                    </CardBody>
               
                </Card>
                </Col>
                </Row>
            </Container>);
    }

    const playAgain =() =>{

        window.location.reload();
        setCross(true)
        setWinMssg("")
        maze.fill("");
        select=false;
        flag=false;

    }

    const findWinner =() =>{
        if(maze[0]===maze[1] && maze[0]===maze[2] && maze[0]!=="")
        {
            setWinMssg(maze[0]+" has won ! 🤩");
            flag=true;

        }
        else if(maze[3]===maze[4] && maze[3]===maze[5] && maze[3]!=="")
        {
            setWinMssg(maze[3]+" has won ! 🤩");
            flag=true;
        }
        else if(maze[6]===maze[7] && maze[6]===maze[8] && maze[6]!=="")
        {
            setWinMssg(maze[6]+" has won ! 🤩");
            flag=true;
        }
        else if(maze[0]===maze[3] && maze[0]===maze[6] && maze[0]!=="")
        {
            setWinMssg(maze[0]+" has won ! 🤩");
            flag=true;
        }
        else if(maze[1]===maze[4] && maze[1]===maze[7] && maze[1]!=="")
        {
            setWinMssg(maze[1]+" has won ! 🤩");
            flag=true;
        }
        else if(maze[2]===maze[5] && maze[2]===maze[8] && maze[2]!=="")
        {
            setWinMssg(maze[2]+" has won ! 🤩");
            flag=true;
        }
        else if(maze[0]===maze[4] && maze[0]===maze[8] && maze[0]!=="")
        {
            setWinMssg(maze[0]+" has won ! 🤩");
            flag=true;
        }
        else if(maze[2]===maze[4] && maze[2]===maze[6] && maze[2]!=="")
        {
            setWinMssg(maze[2]+" has won ! 🤩");
            flag=true;
        }

        if(maze.length===9 && !maze.includes("")  && flag===false)
        {
            setWinMssg("The match Ended in a Draw :( 😶");
            return;
        }
       
    }

    const game=()=>
    {
        return(
        <Container className="p-5">
        <ToastContainer position="bottom-center" />
        <Row>
            <Col md={6} className="offset-md-3">
                
                {
                    winMssg ? (
                        <div className="dd">
                        <h1 className="text-center">{winMssg}</h1>
                        <Button onClick={playAgain} className="btn">Play Again!</Button>
                        </div>
                    ) : (
                        <h1 style={{textAlign:'center' ,color:"white"}}>{isCross ? "Cross's Turn": "Circle's Turn"}</h1>
                    )
                }

                <div className="grid">
                    {maze.map((val,i)=>(

                            <Card onClick={()=>changeItem(i)}>
                                <CardBody className="box">
                                    <Icons choice={maze[i]} />
                                </CardBody>
                            </Card>
                    ))}
                </div>
            </Col>
        </Row>

    </Container>
        );
    }

    const changeItem=(index)=>{

        if(winMssg)
        {
            return toast("Game is already Over 🙃",{type:"success"});
        }

        if(maze[index]==="")
        {
            maze[index]= isCross ? "cross":"circle";
            setCross(!isCross);
        }

       else if(maze[index]!==""){
            return toast("You cannot place your move here 🥴",{type:"warning"});
        }
      



        findWinner();
       
    }


    return (
        <>
       { select ? game(): selection() } 
        </>);
}

export default App;