  export const WorkOutSplit = [
    {
      id: "01",
      split: "PPL",
    },
    {
      id: "02",
      split: "BRO SPLIT",
    },
    {
      id: "03",
      split: "ARNOLD SPLIT",
    },
    {
      id: "04",
      split: "UPPER AND LOWER",
    },
  ];

  export const exerciseList = [
    // PUSH
    {
      id: "05",
      name: "TRICEPS (PUSH)",
      category: "PPL",
      image: require("./assets/Icons/TricepIcon.png"),
      color: "#fff",
      exercises: ["Katana Extension", "Cable Tricep Pushdown"],
    },
    {
      id: "06",
      name: "SHOULDERS (PUSH)",
      category: "PPL",
      image: require("./assets/Icons/ShoulderIcon.png"),
      color: "#fff",
      exercises: ["Lateral Raise", "Dumbbell Shoulder Press"],
    },
    {
      id: "07",
      name: "CHEST (PUSH)",
      category: "PPL",
      image: require("./assets/Icons/ChestIcon.png"),
      color: "#fff",
      exercises: [
        "Incline Dumbbell Press",
        "Machine Incline Press",
        "Dumbbell Bench Press",
        "Barbell Bench Press",
        "High-To-Low Cables",
        "Dips",
      ],
    },
    // PULL
    {
      id: "08",
      name: "BACK (PULL)",
      category: "PPL",
      image: require("./assets/Icons/BackIcon.png"),
      color: "#fff",
      exercises: ["Lat Pulldowns", "Chest Supported Dumbbell Row"],
    },
    {
      id: "09",
      name: "BICEPS (PULL)",
      category: "PPL",
      image: require("./assets/Icons/BicepIcon.png"),
      color: "#fff",
      exercises: ["Incline Curls", "Hammer Curls", "Spider Curls"],
    },
    {
      id: "10",
      name: "REAR DELTS (PULL)",
      category: "PPL",
      image: require("./assets/Icons/ShoulderIcon.png"),
      color: "#fff",
      exercises: ["Rear Delt Flies"],
    },
    // LEGS
    {
      id: "11",
      name: "LEGS",
      category: "PPL",
      image: require("./assets/Icons/LegIcon.png"),
      color: "#fff",
      exercises: [
        "Hack Squat",
        "Leg Extension",
        "Leg Curls",
        "Romanian Deadlifts",
        "Calf Raises",
      ],
    },
    //BRO Split
    {
      id: "12",
      name: "CHEST",
      category: "BRO SPLIT",
      image: require("./assets/Icons/ChestIcon.png"),
      color: "#fff",
      exercises: [
        "Dumbbell Bench Press",
        "Barbell Bench Press",
        "Incline Dumbbell Bench Press",
        "Barbell Incline Bench Press",
        "Dumbbell Chest Flies",
        "Dips",
      ],
    },
    {
      id: "13",
      name: "SHOULDERS",
      category: "BRO SPLIT",
      image: require("./assets/Icons/ShoulderIcon.png"),
      color: "#fff",
      exercises: [
        "Dumbbell Shoulder Press",
        "Dumbbell Lateral Raise",
        "Cable Lateral Raise",
        "Rear Delt Flies",
      ],
    },
    {
      id: "14",
      name: "LEGS",
      category: "BRO SPLIT",
      image: require("./assets/Icons/LegIcon.png"),
      color: "#fff",
      exercises: [
        "Hack Squat",
        "Leg Extension",
        "Leg Curls",
        "Romanian Deadlift",
        "Calf Raises",
      ],
    },
    {
      id: "15",
      name: "ARMS",
      category: "BRO SPLIT",
      image: require("./assets/Icons/BicepIcon.png"),
      color: "#fff",
      exercises: [
        "Preacher Curls",
        "Incline Curls",
        "Hammer Curls",
        "Katana Extensions",
        "Cable Pulldowns",
        "Dips",
      ],
    },
    {
      id: "16",
      name: "BACK",
      category: "BRO SPLIT",
      image: require("./assets/Icons/BackIcon.png"),
      color: "#fff",
      exercises: [
        "Barbell Rows",
        "Chest Supported Rows",
        "Lat Pulldown",
        "Pull Ups",
        "Deadlift",
      ],
    },
    //ARNOLD SPLIT 
    {
      id: "17",
      name: "CHEST",
      category: "ARNOLD SPLIT",
      image: require("./assets/Icons/ChestIcon.png"),
      color: "#fff",
      exercises: ["Dumbbell Bench Press", "Incline Dumbbell Bench Press", "Dips"],
    },
    {
      id: "18",
      name: "BACK",
      category: "ARNOLD SPLIT",
      image: require("./assets/Icons/BackIcon.png"),
      color: "#fff",
      exercises: ["Pull Ups", "Dumbbell Rows", "Barbell Rows"],
    },
    {
      id: "19",
      name: "ABS",
      category: "ARNOLD SPLIT",
      image: require("./assets/Icons/AbsIcon.png"),
      color: "#fff",
      exercises: [
        "Crunches",
        "Flutter Kicks",
        "Planks",
        "Bicycle Crunches",
        "Leg Raise",
      ],
    },
    {
      id: "20",
      name: "LEGS",
      category: "ARNOLD SPLIT",
      image: require("./assets/Icons/LegIcon.png"),
      color: "#fff", 
      exercises: [
        "Barbell Squat",
        "Deadlift",
        "Leg Press",
        "Leg Extension",        
        "Leg Curl", 
        "Calf Raise",  
      ],
    },
    
    // UPPER AND LOWER
    {
      id: "21",
      name: "UPPER \n (STRENGTH)", 
      category: "UPPER AND LOWER",
      image: require("./assets/Icons/UpperIcon.png"),
      color: "#fff", 
      exercises: [
        "Barbell Bench Press", 
        "Bent Over Row",
        "Incline Bench Press",
        "Pull Ups",
        "Overhead Press",
        "T-Bar Row",
        "Barbell Curl",
        "Cable Tricep Pushdown" 
      ],
    },
    {
      id: "22",
      name: "LOWER \n (STRENGTH)",
      category: "UPPER AND LOWER",
      image: require("./assets/Icons/LegIcon.png"),
      color: "#fff", 
      exercises: [
        "Barbell Squat",
        "Leg Press",
        "Calf Raise",
        "Leg Curl", 
      ],
    },
    {
      id: "23",
      name: "UPPER \n (HYPERTROPHY)",
      category: "UPPER AND LOWER",
      image: require("./assets/Icons/UpperIcon.png"),
      color: "#fff", 
      exercises: [
        "Dumbbell Bench Press", 
        "Lat Pulldown",
        "Incline Chest Press",
        "Cable Row",
        "Dumbbell Lateral Raise",
        "Hammer Curl",
        "Rope Cable Tricep Extension", 
        "High-To-Low Cables",
        "Rear Delt Fly",
      ],
    },
    {
      id: "24",
      name: "LOWER \n (HYPERTROPHY)",
      category: "UPPER AND LOWER",
      image: require("./assets/Icons/LegIcon.png"),
      color: "#fff", 
      exercises: [
        "Hack Squat",
        "Romanian Deadlift",
        "Leg Extension",
        "Donkey Calf Raise", 
      ],
    },
  ];
