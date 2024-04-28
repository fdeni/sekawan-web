// import React from 'react';
// import { useHistory } from 'react-router-dom';

// import {
//     Card,
//     CardImg,
//   } from "reactstrap";

// class CardCustom extends React.Component {
//     constructor(props) {
//         super(props);
//       }
//       handleClick = () => {
//         const { history } = this.props;
//         history.push('/other');
//       }

//     render() {
//         const { image } = this.props.image;
//         return (
//             <div onClick={this.handleClick}>
//                 <Card className="card-lift--hover shadow border-0">
//                     <CardImg
//                         alt="..."
//                         src={require({image})}
//                     ></CardImg>
//                 </Card>
//             </div>
//         );
//     }
// }

// const CardLink = () => {
//     const navigate = useNavigate();
  
//     return <CardCustom navigate={navigate} />;
//   }
  

// export default CardLink;