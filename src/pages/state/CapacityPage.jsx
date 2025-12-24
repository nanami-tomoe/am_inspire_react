import Button from '../../components/ui/Button' ; 
import { useState, useEffect } from 'react';

/*
Quiz)
- 입장인원이 있고
- 증가버튼의 이벤트를 통해서 버튼이 클릭될 때마다 인원을 증가시키고
- 해당인원이 꽉차면 입장버튼을 비활성화시키고 
- 감소버튼의 이벤트를 통해서 버튼이 클릭될 때마다 인원 감소시키고
- 입장인원이 0되면 퇴장을 버튼을 비활성화 

- reative state 상태를 관리할 예정(증가버튼 클릭시 입장인원을 화면에 출력)
*/

const CapacityPage = () => {
    
    const capacity = 10 ; 
    const [cnt, setCnt]     = useState(0); 
    const [full, setFull]   = useState(false); 
    const [empty, setEmpty] = useState(false); 
    // template UI

    const upCntHandler = () => {
        console.log(">>>> upCntHandler call");
        setCnt( cnt => cnt + 1 );
        // console.log(">>>> cnt ++" , cnt);
    }
    const downCntHandler = () => {
        console.log(">>>> downCntHandler call");
        setCnt( cnt => cnt - 1 ); 
        // console.log(">>>> cnt --" , cnt);
    }

    // side effect 
    useEffect( () => {
        console.log(">>>> useEffect call");
        console.log(">>>> cnt " , cnt) ; 
        setFull( cnt >= capacity ); 
        setEmpty( cnt <=0 ) ;
    }, [cnt] );      
    

    return (
        <div>
            <p>입장인원 : {cnt} </p>
            <Button title="입장" 
                    onClick={upCntHandler}  
                    disabled={full} />
            <Button title="퇴장" 
                    onClick={downCntHandler}
                    disabled={empty} />
            {   
                full && <p style={{color : 'red'}}>정원이 가득찼습니다.</p>
            }
        </div>
    )
}

export default CapacityPage ;
