const where = document.querySelector("#contactList")
const createContact = (name,title,email)=> ({
      name, title, email
})
const displayContact = contact => { 
    const html= `
    <section class="contact"> 
    <h1>${contact.name}</h1>
    <h2>${contact.title}</h2>
    <div>${contact.email}</div>
    </section
    `
    where.innerHTML += html
 
}

const me = createContact("michelle","friend", "abc123@gmail.com")
const him = createContact("bob","work","123@yahoo.com")
const she= createContact("anna","po","456@yahoo.com")
 displayContact(me)
 displayContact(him)
 displayContact(she)

console.log(me)
console.log(him)
console.log(she)