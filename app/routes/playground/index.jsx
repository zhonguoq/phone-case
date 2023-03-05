import Canvas from './Canvas'

function Welcome({name}) {
  return <h1>Hello, {name}</h1>;
}

export default function Index(){
    return (
        <div>
                <h1>Hello from playground!</h1>
                <h1>Hello from playground!</h1>
                <h1>Hello from playground!</h1>
                <Welcome name="shuaige"></Welcome>
                <Canvas name="jiajia"></Canvas>
        </div>
    )

}
