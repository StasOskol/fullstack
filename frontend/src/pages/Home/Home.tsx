import { useEffect, useState } from 'react';
import './Home.scss';
import { dataDto } from '@/types/data/data.type';
import { dataController } from '@/services/api/controllers/data-controller';

const Home = () => {
    const [data, setData] = useState<dataDto[]>();
    const [name, setName] = useState<string>("");
    const [age, setAge] = useState<string>("");

    useEffect(() => {
        dataController.getData()
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            })
            .catch((e) => console.log(e));
    }, []);

    const sent = () => {
        const res = {
            name: name,
            age: Number(age)
        }

        console.log(res);

        dataController.createData(res)
            .then((res) => {
                console.log(res.data);
                dataController.getData()
                    .then((res) => {
                        console.log(res.data);
                        setData(res.data);
                    })
            })
    }

    return <div className="home-page">
        {data?.map((item, key) => (
            <div key={key}>
                {item.name}
            </div>
        ))}
        <input onChange={(event) => setName(event.target.value)} />
        <input onChange={(event) => setAge(event.target.value)} />
        <button onClick={sent}>Создать</button>
    </div>
};

export default Home;