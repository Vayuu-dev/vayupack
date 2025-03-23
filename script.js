// Variables globales
let activeTab = "description"
let activeCategory = null

// Données des catégories
const categories = [
  { id: "armures", title: "Armures", category: "Équipement" },
  { id: "interface", title: "Interface", category: "UI" },
  { id: "son", title: "Son", category: "Audio" },
  { id: "mobs", title: "Mobs & Créatures", category: "Entités" },
  { id: "items", title: "Items & Outils", category: "Objets" },
]

// Fonction d'initialisation
document.addEventListener("DOMContentLoaded", () => {
  // Initialiser les onglets
  initTabs()

  // Initialiser les cartes de catégories
  initCategoryCards()

  // Initialiser le bouton de retour
  document.getElementById("btn-back").addEventListener("click", () => {
    showTab("description")
    activeCategory = null
  })
})

// Fonction pour initialiser les onglets
function initTabs() {
  // Bouton Description
  document.getElementById("btn-description").addEventListener("click", () => {
    showTab("description")
    activeCategory = null
  })

  // Bouton Changelog
  document.getElementById("btn-changelog").addEventListener("click", () => {
    showTab("changelog")
    activeCategory = null
  })

  // Bouton Versions
  document.getElementById("btn-versions").addEventListener("click", () => {
    showTab("versions")
    activeCategory = null
  })

  // Afficher l'onglet actif par défaut
  showTab(activeTab)
}

// Fonction pour initialiser les cartes de catégories
function initCategoryCards() {
  const categoryCards = document.querySelectorAll(".category-card")

  categoryCards.forEach((card) => {
    card.addEventListener("click", function () {
      const categoryId = this.getAttribute("data-category")
      showCategory(categoryId)
    })
  })
}

// Fonction pour afficher un onglet
function showTab(tabId) {
  // Masquer tous les onglets
  const tabContents = document.querySelectorAll(".tab-content")
  tabContents.forEach((tab) => {
    tab.classList.remove("active")
  })

  // Afficher l'onglet sélectionné
  document.getElementById(`content-${tabId}`).classList.add("active")

  // Mettre à jour les styles des boutons
  updateTabButtons(tabId)

  // Mettre à jour l'onglet actif
  activeTab = tabId
}

// Fonction pour mettre à jour les styles des boutons d'onglets
function updateTabButtons(activeTabId) {
  // Réinitialiser tous les boutons
  document.getElementById("btn-description").className = "btn btn-outline"
  document.getElementById("btn-changelog").className = "btn btn-outline"
  document.getElementById("btn-versions").className = "btn btn-outline"

  // Mettre en évidence le bouton actif
  document.getElementById(`btn-${activeTabId}`).className = "btn btn-primary"
}

// Fonction pour afficher une catégorie
function showCategory(categoryId) {
  // Trouver les données de la catégorie
  const category = categories.find((cat) => cat.id === categoryId)
  if (!category) return

  // Mettre à jour le titre de la catégorie
  document.getElementById("category-title").textContent = category.title

  // Générer le contenu de la catégorie
  generateCategoryContent(category)

  // Afficher l'onglet de catégorie
  showTab("category")

  // Mettre à jour la catégorie active
  activeCategory = categoryId
}

// Fonction pour générer le contenu d'une catégorie
function generateCategoryContent(category) {
  const container = document.querySelector(".grid-category")
  container.innerHTML = ""

  // Générer 9 éléments pour la catégorie
  for (let i = 0; i < 9; i++) {
    const card = document.createElement("div")
    card.className = "card"
    card.innerHTML = `
            <div class="aspect-square overflow-hidden">
                <img src="https://via.placeholder.com/300" alt="${category.title} ${i + 1}" class="w-full h-full object-cover transition-transform">
            </div>
            <div class="card-footer">
                <h3 class="font-medium">${category.title} ${i + 1}</h3>
                <p class="text-sm text-zinc-400">Description de ${category.title.toLowerCase()}</p>
            </div>
        `
    container.appendChild(card)
  }
}

// Fonction pour télécharger le pack de texture
function downloadTexturePack() {
  alert("Téléchargement du pack de texture...")
  // Ici, vous pouvez ajouter le code pour télécharger réellement le fichier
  // Par exemple:
  // const link = document.createElement('a');
  // link.href = 'votre-pack-de-texture.zip';
  // link.download = 'VayuPack-Immersion.zip';
  // document.body.appendChild(link);
  // link.click();
  // document.body.removeChild(link);
}

