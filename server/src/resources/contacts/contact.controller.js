import contactsData from './Contact.json' assert { type: "json"}


export function getContacts(req, res){
    console.log('Mes contacts sont: ')
    return res.status(200).json(contactsData.contacts)

}


export function getContactId(req, res){
    const idParam = parseInt(req.params.id)

    const contact = contactsData.contacts.find((contact) => contact.id == idParam)
    return res.status(200).json(contact)
}

export function createNewContact(req, res){
    console.log('Le nouveau contact a été crée')
    return res.status(200).json({ message: 'Liste des contacts' })
}

export function modifyContact(req, res){
    console.log('Le contact a été modifié')
    res.json({ message: 'Liste des contacts' })
}

export function deleteContact(req, res){
    console.log('Contact supprimé')
    return res.status(200).json({ message: 'Liste des contacts' })
}