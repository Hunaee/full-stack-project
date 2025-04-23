import Client from "./client.model.js";

export const getClientAge = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Client.findById(id);

    if (!client) {
      return res.status(404).json({ message: "Client non trouvé" });
    }

    const age = client.getAge();
    return res.json({ age });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur serveur" });
  }
};
