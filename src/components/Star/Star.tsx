import "./Star.scss";

type RatingPropsType = {
  value: number;
  // value: 0 | 1| 2| 3| 4| 5;
}

type RaitingTitleString = {
  title: string;
}

type StarType = {
  selected: boolean;
}

function Star (props: RatingPropsType) {
    if (props.value === 0) {
      return (
        <div>
        <StarTitle title = {"Рейтинг"}/>
        <StarImg selected = {false}/>
        <StarImg selected = {false}/>
        <StarImg selected = {false}/>
        <StarImg selected = {false}/>
        <StarImg selected = {false}/>
      </div>
      )
    } else if (props.value === 1) {
      return (
        <div>
          <StarTitle title = {"Рейтинг"}/>
        <StarImg selected = {true}/>
        <StarImg selected = {false}/>
        <StarImg selected = {false}/>
        <StarImg selected = {false}/>
        <StarImg selected = {false}/>
      </div>
      )
    } else if (props.value === 2) {
      return (
        <div>
          <StarTitle title = {"Рейтинг"}/>
        <StarImg selected = {true}/>
        <StarImg selected = {true}/>
        <StarImg selected = {false}/>
        <StarImg selected = {false}/>
        <StarImg selected = {false}/>
      </div>
      )
    } else if (props.value === 3) {
      return (
        <div>
          <StarTitle title = {"Рейтинг"}/>
        <StarImg selected = {true}/>
        <StarImg selected = {true}/>
        <StarImg selected = {true}/>
        <StarImg selected = {false}/>
        <StarImg selected = {false}/>
      </div>
      )
    } else if (props.value === 4) {
      return (
        <div>
          <StarTitle title = {"Рейтинг"}/>
        <StarImg selected = {true}/>
        <StarImg selected = {true}/>
        <StarImg selected = {true}/>
        <StarImg selected = {true}/>
        <StarImg selected = {false}/>
      </div>
      )
    } else if (props.value === 5) {
      return (
        <div>
          <StarTitle title = {"Рейтинг"}/>
        <StarImg selected = {true}/>
        <StarImg selected = {true}/>
        <StarImg selected = {true}/>
        <StarImg selected = {true}/>
        <StarImg selected = {true}/>
      </div>
      )
    } else {
      return (
        <div>
          <StarTitle title = {"Рейтинг"}/>
        <StarImg selected = {false}/>
        <StarImg selected = {false}/>
        <StarImg selected = {false}/>
        <StarImg selected = {false}/>
        <StarImg selected = {false}/>
      </div>
      )
    }
}

function StarTitle (props:RaitingTitleString) {
  return <p>{props.title}</p>
}


function StarImg (props: StarType) {
    if (props.selected === true) {
      return <span><b>Star </b></span>
    } else {
      return <span>Star </span>
    }
  
}

export default Star;