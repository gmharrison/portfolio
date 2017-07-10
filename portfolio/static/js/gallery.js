import React from 'react';
import ReactDOM from 'react-dom';
import {Squiggle} from './images.js'


// export function Gallery({ pieces }) {
//     const Portfolio = pieces.map((piece) =>
//     <div className="col-md-4" key={piece.id}>
//         <div className="object-container" key={piece.id} style={{backgroundImage:'url(' + piece.style + ')'}}>
//             <div className="text-container">
//                 <div className="object-title">
//                 {piece.title}
//                 </div>
//                 <div className="squiggle-container">
//                     <Squiggle />
//                 </div>
//             </div>
//             <div className="title-container">
//                 <p className="work-title">{piece.description}</p>
//             </div>
//         </div>
//     </div>
//     )
//
//   return <div>{Portfolio}</div>
// }

export function Gallery({ pieces }) {
  let content = [];
  pieces.forEach((piece, i) =>{
      if((i+1) % 3 == 0){
        content.push(
          <div className="row" key={piece.id}>
            <div className="col-md-4" key={piece.id}>
                <div className="object-container" href={piece.path} key={piece.id} style={{backgroundImage:'url(' + piece.style + ')'}}>
                    <div className="text-container">
                        <div className="object-title">
                           {piece.title}
                        </div>
                        <div className="squiggle-container">
                            <Squiggle />
                        </div>
                    </div>
                    <div className="title-container">
                        <p className="work-title">{piece.work}</p>
                    </div>
                </div>
            </div>
          </div>
        )
      }else{
          content.push(<div className="col-md-4" key={piece.id}>
                <div className="object-container" key={piece.id} style={{backgroundImage:'url(' + piece.style + ')'}}>
                    <div className="text-container">
                        <div className="object-title">
                            {piece.title}
                        </div>
                        <div className="squiggle-container">
                            <Squiggle />
                        </div>
                    </div>
                    <div className="title-container">
                        <p className="work-title">{piece.work}</p>
                    </div>
                </div>

            </div>);
      }
  });
  return (
      <div>{content}</div>
  )
}