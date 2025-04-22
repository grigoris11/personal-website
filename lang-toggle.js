document.addEventListener("DOMContentLoaded", function() {
  // Load saved language from localStorage, or default to "en"
  let currentLang = localStorage.getItem("preferredLanguage") || "en";

  const toggleButton = document.getElementById("lang-toggle");

  const translations = {
    pageTitle: {
      en: "My Portfolio",
      gr: "Το Portfolio μου"
    },
    headerTitle: {
      en: "Grigoris Koutlis",
      gr: "Γρηγόρης Κουτλής"
    },
    headerSubtitle: {
      en: "Web Developer | Designer | Creator",
      gr: "Web Developer | Designer | Creator"
    },
    welcomeTitle: {
      en: "Welcome to My Portfolio",
      gr: "Καλώς ορίσατε στο Portfolio μου"
    },
    introText: {
      en: "Here is a space where I showcase my work, projects, and skills. Feel free to explore and connect with me.",
      gr: "Εδώ είναι ο χώρος μου για να παρουσιάσω τη δουλειά, τα έργα και τις δεξιότητές μου. Εξερευνήστε και συνδεθείτε μαζί μου."
    },
    aboutProject: {
      en: "About This Project",
      gr: "Σχετικά με το Έργο"
    },
    projectDescription: {
      en: "This project is for one of our lessons in full-stack web programming. It was built using HTML, CSS, JavaScript, and PHP.",
      gr: "Αυτό το έργο υλοποιήθηκε για ένα από τα μαθήματα full-stack προγραμματισμού. Αναπτύχθηκε με HTML, CSS, JavaScript και PHP."
    },
    aboutMe: {
      en: "About Me",
      gr: "Σχετικά με Εμένα"
    },
    aboutMeText: {
      en: "Hi! I'm Grigoris, a passionate web developer who loves building clean and functional websites. I enjoy learning new technologies and turning ideas into reality. I am currently a student of the Department of Information and Communication Systems Engineering (ICSD) in Samos, Greece.",
      gr: "Γεια σας! Είμαι ο Γρηγόρης, ένας παθιασμένος web developer που αγαπά να δημιουργεί καθαρές και λειτουργικές ιστοσελίδες. Απολαμβάνω τη μάθηση νέων τεχνολογιών και τη μετατροπή ιδεών σε πραγματικότητα. Είμαι φοιτητής του Τμήματος Πληροφορικής και Επικοινωνιακών Συστημάτων στην Σάμο, Ελλάδα."
    },
    projectsTitle: {
      en: "My Projects",
      gr: "Τα Έργα μου"
    },
    project1Title: {
      en: "Project 1",
      gr: "Έργο 1"
    },
    project2Title: {
      en: "Project 2",
      gr: "Έργο 2"
    },
    project3Title: {
      en: "Project 3",
      gr: "Έργο 3"
    },
    modeToggle: {
      en: "Switch to Light Mode",
      gr: "Αλλαγή σε Light Mode"
    },
    featuresTitle: {
      en: "Key Features:",
      gr: "Βασικά Χαρακτηριστικά:"
    },
    feature1: {
      en: "✔ Feature 1: Fully working clinic site",
      gr: "✔ Χαρακτηριστικό 1: Λειτουργικός ιστότοπος κλινικής"
    },
    feature2: {
      en: "✔ Feature 2: Different permissions depending on the role (doctor, secretary, patient)",
      gr: "✔ Χαρακτηριστικό 2: Διαφορετικά δικαιώματα ανάλογα με το ρόλο (γιατρός, γραμματέας, ασθενής)"
    },
    feature3: {
      en: "✔ Feature 3: With a few changes, it can be implemented for a real-life office",
      gr: "✔ Χαρακτηριστικό 3: Με λίγες αλλαγές, μπορεί να εφαρμοστεί σε πραγματικό γραφείο"
    },
    githubButton: {
      en: "View on GitHub",
      gr: "Δείτε στο GitHub"
    },
    backButton: {
      en: "Back to Portfolio",
      gr: "Επιστροφή στο Portfolio"
    },
    // Project 2 keys
    pageTitleProject2: {
      en: "Project 2 - My Portfolio",
      gr: "Έργο 2 - Το Portfolio μου"
    },
    aboutProjectProject2: {
      en: "About This Project",
      gr: "Σχετικά με το Έργο"
    },
    projectDescriptionProject2: {
      en: "This project is for another lesson in full-stack web programming. It was built using HTML, CSS, JavaScript, and PHP.",
      gr: "Αυτό το έργο υλοποιήθηκε για ένα άλλο μάθημα full-stack προγραμματισμού. Αναπτύχθηκε με HTML, CSS, JavaScript και PHP."
    },
    // Project 3 keys
    pageTitleProject3: {
      en: "Project 3 - My Portfolio",
      gr: "Έργο 3 - Το Portfolio μου"
    },
    aboutProjectProject3: {
      en: "About This Project",
      gr: "Σχετικά με το Έργο"
    },
    projectDescriptionProject3: {
      en: "The Memory Card Matching Game is a Java-based application developed using JavaFX. It is a classic memory puzzle game where players flip over pairs of cards to find matches. The game provides a graphical user interface (GUI) that allows users to interact with the game board, select difficulty levels, and track their performance. Players must match all card pairs before running out of attempts to win the game.",
      gr: "Το Memory Card Matching Game είναι μια εφαρμογή βασισμένη στη Java που αναπτύχθηκε με τη χρήση της JavaFX. Είναι ένα κλασικό παιχνίδι μνήμης, όπου οι παίκτες αναποδογυρίζουν ζεύγη καρτών για να βρουν αντιστοιχίες. Το παιχνίδι παρέχει ένα γραφικό περιβάλλον χρήστη (GUI) που επιτρέπει στους χρήστες να αλληλεπιδρούν με το ταμπλό του παιχνιδιού, να επιλέγουν επίπεδα δυσκολίας και να παρακολουθούν την απόδοσή τους. Οι παίκτες πρέπει να βρουν όλες τις αντιστοιχίες πριν εξαντληθούν οι προσπάθειες για να κερδίσουν το παιχνίδι."
    },
    featuresTitleProject3: {
      en: "Key Features:",
      gr: "Βασικά Χαρακτηριστικά:"
    },
    feature1_project3: {
      en: "✔ Feature 1: Interactive Game Board. A dynamic grid-based layout where players flip cards to find matching pairs.",
      gr: "✔ Χαρακτηριστικό 1: Διαδραστικό Ταμπλό Παιχνιδιού. Μια δυναμική διάταξη σε πλέγμα όπου οι παίκτες αναποδογυρίζουν κάρτες για να βρουν αντιστοιχίες."
    },
    feature2_project3: {
      en: "✔ Feature 2: Multiple Difficulty Levels. Players can choose between 4x4, 8x8, or 10x10 grid sizes for different challenges.",
      gr: "✔ Χαρακτηριστικό 2: Πολλαπλά Επίπεδα Δυσκολίας. Οι παίκτες μπορούν να επιλέξουν μεταξύ 4x4, 8x8 ή 10x10 διαστάσεων πλέγματος για διάφορες προκλήσεις."
    },
    feature3_project3: {
      en: "✔ Feature 3: Score & Attempt Tracking. The game keeps track of the player's attempts and displays results upon completion.",
      gr: "✔ Χαρακτηριστικό 3: Παρακολούθηση Βαθμολογίας & Προσπαθειών. Το παιχνίδι καταγράφει τις προσπάθειες του παίκτη και εμφανίζει τα αποτελέσματα στο τέλος."
    },
    feature4_project3: {
      en: "✔ Feature 4: User-Friendly Menu. A main menu that allows users to enter their name, select card themes, and start a new session.",
      gr: "✔ Χαρακτηριστικό 4: Φιλικό Μενού Χρήστη. Ένα κύριο μενού που επιτρέπει στους χρήστες να εισάγουν το όνομά τους, να επιλέγουν θεματικές καρτών και να ξεκινούν μια νέα συνεδρία."
    },
    feature5_project3: {
      en: "✔ Feature 5: JavaFX-Based GUI. Smooth animations and visually appealing card-flipping effects enhance user experience.",
      gr: "✔ Χαρακτηριστικό 5: Γραφικό Περιβάλλον βασισμένο στη JavaFX. Ομαλές κινήσεις και ελκυστικά εφέ αναποδογύρωσης καρτών βελτιώνουν την εμπειρία χρήστη."
    },
    pageTitleProject4: {
      en: "Project 4 - My Portfolio",
      gr: "Έργο 4 - Το Portfolio μου"
    },
    project4Title: {
      en: "VR Museum ",
      gr: "Μουσείο VR "
    },
    aboutProjectProject4: {
      en: "About This Project",
      gr: "Σχετικά με το Έργο"
    },
    projectDescriptionProject4: {
      en: "This project was made for a local folklore Museum. The website includes an elegant welcome page with historical context, a VR TOUR using 360° scenes where users can explore different rooms interactively, a Media Wall for browsing through photos with zoomable modals and navigation, and a dedicated Δραστηριότητες page (for events/activities, ready for future content).",
      gr: "Αυτό το έργο δημιουργήθηκε για ένα τοπικό λαογραφικό μουσείο. Ο ιστότοπος περιλαμβάνει μια κομψή σελίδα καλωσορίσματος με ιστορικό υπόβαθρο, μια περιήγηση VR με 360° σκηνές όπου οι χρήστες μπορούν να εξερευνήσουν διαφορετικά δωμάτια διαδραστικά, ένα Media Wall για προβολή φωτογραφιών με δυνατότητες μεγέθυνσης και πλοήγησης, και μια σελίδα δραστηριοτήτων για μελλοντικό περιεχόμενο."
    },
    featuresTitleProject4: {
      en: "Key Features:",
      gr: "Βασικά Χαρακτηριστικά:"
    },
    feature1_project4: {
      en: "✔ Feature 1: Interactive VR tour using 360° panoramic scenes.",
      gr: "✔ Χαρακτηριστικό 1: Διαδραστική περιήγηση VR με πανοραμικές σκηνές 360°."
    },
    feature2_project4: {
      en: "✔ Feature 2: Elegant welcome page with historical context and visuals.",
      gr: "✔ Χαρακτηριστικό 2: Κομψή σελίδα καλωσορίσματος με ιστορικό περιεχόμενο και εικόνες."
    },
    feature3_project4: {
      en: "✔ Feature 3: Image gallery with modal and zoom navigation.",
      gr: "✔ Χαρακτηριστικό 3: Συλλογή εικόνων με δυνατότητα μεγέθυνσης και περιήγησης."
    },
    feature4_project4: {
      en: "✔ Feature 4: Events page structure for future content expansion.",
      gr: "✔ Χαρακτηριστικό 4: Δομή σελίδας δραστηριοτήτων για μελλοντικό περιεχόμενο."
    },
    feature5_project4: {
      en: "✔ Feature 5: Built with Pannellum, Lightbox, HTML/CSS/JS.",
      gr: "✔ Χαρακτηριστικό 5: Υλοποίηση με Pannellum, Lightbox, HTML/CSS/JS."
    }
    
  };

  function updateText() {
    document.querySelectorAll("[data-translate-key]").forEach(el => {
      const key = el.getAttribute("data-translate-key");
      if (translations[key]) {
        el.textContent = translations[key][currentLang];
      }
    });
    // Update the document title based on common key if applicable
    if (
      document.title.includes("Project 1") ||
      document.title.includes("Project 2") ||
      document.title.includes("Project 3") ||
      document.title.includes("My Portfolio")
    ) {
      // You might want to set a project-specific title, or use the generic one:
      document.title = translations.pageTitle[currentLang];
    }
  }

  // Set initial text based on saved language
  updateText();
  // Update the toggle button image based on saved language
  if (currentLang === "gr") {
    toggleButton.querySelector("img").src = "img/uk-flag.png";
  } else {
    toggleButton.querySelector("img").src = "img/gr-flag.png";
  }

  toggleButton.addEventListener("click", function() {
    if (currentLang === "en") {
      currentLang = "gr";
      toggleButton.querySelector("img").src = "img/uk-flag.png"; // Show British flag when switching to Greek
    } else {
      currentLang = "en";
      toggleButton.querySelector("img").src = "img/gr-flag.png"; // Show Greek flag when switching to English
    }
    // Save language preference
    localStorage.setItem("preferredLanguage", currentLang);
    updateText();
  });
  
  // On load, check if a language is saved and update accordingly
  if (localStorage.getItem("preferredLanguage")) {
    currentLang = localStorage.getItem("preferredLanguage");
    updateText();
    if (currentLang === "gr") {
      toggleButton.querySelector("img").src = "img/uk-flag.png";
    } else {
      toggleButton.querySelector("img").src = "img/gr-flag.png";
    }
  }
});

