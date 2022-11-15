import { useState } from "react";

const List = (name:any) => {

    const [list,setList] = useState(false);

    const handleClick = () => {
        setList(!list)
    }

    return (
        <div>
            <h2 onClick={handleClick}>{name}</h2>
            {list?
                <div>
                    <button>Dashboard</button>
                    <button>Issues</button>
                    <button>Contributors</button>
                </div>
            :
                null
            }
        </div>
    )
}

export default List;