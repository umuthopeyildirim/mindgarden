puts "🌱 Seeding spices..."

# Seed Feelings in the database
feelings = [
    "😀 Happy",
    "😲 Suprised",
    "😤 Angry",
    "😍 In Love",
    "😵‍💫 Frustrated",
    "😭 Sad",
    "🤫 Secretive",
    "😱 Depressed",
    "😴 Sleepy",
    "🤪 Crazy",
    "🤔 Confused",
    "😡 Mad",
    "😎 Cool",
    "😇 Innocent",
    "😈 Evil",
    "🤑 Rich",
    "🤢 Disgusted",
    "🤮 Sick",
    "🤡 Clown",
    "🤠 Cowboy",
    "🤥 Lying",
    "🤫 Shushing",
    "🤭 Pretending",
    "🤐 Zipped",
    "🤓 Nerd",
    "🤗 Hugging",
    "🤣 Funny",
    "🤯 Burned Out",
    "🤒 Sick",
    "😶 Bored",
    "😷 Sick",
]

feelings.each do |feeling|
    Feeling.create(name: feeling)
end


puts "✅ Done seeding!"
