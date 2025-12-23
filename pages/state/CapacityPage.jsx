import Button from "../../components/ui/Button" ;
import { useState, useEffect } from "react" ;

/*
Quiz)
- 입장인원이 있고
- 증가버튼의 이벤트를 통해서 버튼이 클릭될 때마다 인원을 증가시키고
- 해당인원이 꽉차면 입장버튼을 비활성화시키고 
- 감소버튼의 이벤트를 통해서 버튼이 클릭될 때마다 인원 감소시키고
- 입장버튼을 활성화

- reative state 상태를 관리할 예정(증가버튼 클릭시 입장인원을 화면에 출력)
*/
const CapacityPage = () => {

    const capacity = 10;
    const [cnt, setCnt] = useState(0);
    
    // side effect
    useEffect( () => {
        
    }, []);

    return (
        <div>
            <p>입장인원 : {cnt}</p>
            <Button title="입장" onClick={ () => setCapacity(cnt + 1) } />
            <Button title="퇴장" onClick={ () => setCapacity(cnt - 1) } />
        </div>
    )
}

export default CapacityPage ;