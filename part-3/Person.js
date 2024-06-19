/** Info on a single person.
 *
 * Props:
 * - name
 * - age
 * - hobbies: array, like ["cats", "bridge", "fighting the patriarchy"]
 */

const Person = (props) => {

let reply;
if(props.age < 18) {
    reply = "Go and eat your veggies!"
}else{
    reply = "Go and Vote!!!"
}
return {reply}
}

