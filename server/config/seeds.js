const db = require("./connection");

const { Dog, Breed, Color, Status, Temperament, User } = require("../models");

db.once("open", async () => {
    await Status.deleteMany();
    const status = await Status.insertMany([
        { name: "Available" },
        { name: "Not Available" }
    ]);
    await Color.deleteMany();
    const color = await Color.insertMany([
        { name: "Brown" },
        { name: "Red" },
        { name: "Gold" },
        { name: "Cream" },
        { name: "Fawn" },
        { name: "Black" },
        { name: "Blue" },
        { name: "White" },
        { name: "Orange" },
        { name: "Silver" },
        { name: "Tan" },
        { name: "Grey" },
        { name: "Piebald" },
        { name: "Brindle" },
        { name: "Tricolor" },
        { name: "Yellow" },
        { name: "Sable" },
        { name: "Harlequin" },
        { name: "Mantle" },
        { name: "Mahogany" },
        { name: "Rust" },
    ]);
    await Temperament.deleteMany();
    const temperament = await Temperament.insertMany([
        { name: "Active" },
        { name: "Adaptable" },
        { name: "Affectionate" },
        { name: "Aggressive" },
        { name: "Agile" },
        { name: "Alert" },
        { name: "Aloof" },
        { name: "Amiable" },
        { name: "Athletic" },
        { name: "Attentive" },
        { name: "Boisterous" },
        { name: "Bold" },
        { name: "Brave" },
        { name: "Bright" },
        { name: "Calm" },
        { name: "Cautious" },
        { name: "Charming" },
        { name: "Cheerful" },
        { name: "Clever" },
        { name: "Clownish" },
        { name: "Courageous" },
        { name: "Confident" },
        { name: "Cooperative" },
        { name: "Curious" },
        { name: "Determined" },
        { name: "Devoted" },
        { name: "Dignified" },
        { name: "Docile" },
        { name: "Easygoing" },
        { name: "Energetic" },
        { name: "Even Tempered" },
        { name: "Excitable" },
        { name: "Extroverted" },
        { name: "Faithful" },
        { name: "Fearless" },
        { name: "Friendly" },
        { name: "Generous" },
        { name: "Gentle" },
        { name: "Good-natured" },
        { name: "Gregarious" },
        { name: "Happy" },
        { name: "Independent" },
        { name: "Instinctual" },
        { name: "Intelligent" },
        { name: "Keen" },
        { name: "Kind" },
        { name: "Lively" },
        { name: "Loyal" },
        { name: "Loving" },
        { name: "Mischievous" },
        { name: "Obedient" },
        { name: "Opinionated" },
        { name: "Outgoing" },
        { name: "Patient" },
        { name: "Playful" },
        { name: "Powerful" },
        { name: "Protective" },
        { name: "Quick" },
        { name: "Quiet" },
        { name: "Reliable" },
        { name: "Reserved" },
        { name: "Responsive" },
        { name: "Self-assured" },
        { name: "Sensitive" },
        { name: "Sociable" },
        { name: "Spunky" },
        { name: "Steady" },
        { name: "Strong" },
        { name: "Stubborn" },
        { name: "Suspicious" },
        { name: "Sweet-Tempered" },
        { name: "Tenacious" },
        { name: "Thoughtful" },
        { name: "Trainable" },
        { name: "Trustworthy" },
        { name: "Vocal" },
        { name: "Watchful" },
        { name: "Willful" },
    ]);
    await Breed.deleteMany();

    const breed = await Breed.insertMany([
        {
            name: "German Shepard",
            size: "Medium",
            hypoallergenic: false,
            colors: [color[5]._id, color[9]._id, color[10]._id, color[11]._id],
            temperaments: [temperament[5]._id, temperament[20]._id, temperament[21]._id, temperament[23]._id, temperament[43]._id, temperament[47]._id, temperament[50]._id, temperament[76]._id]
        },
        {
            name: "Bulldog",
            size: "Medium",
            hypoallergenic: false,
            colors: [color[7]._id, color[4]._id, color[12]._id, color[14]._id, color[1]._id],
            temperaments: [temperament[25]._id, temperament[35]._id, temperament[39]._id, temperament[77]._id]
        },
        {
            name: "Beagle",
            size: "Small",
            hypoallergenic: false,
            colors: [color[7]._id, color[10]._id, color[8]._id, color[1]._id, color[14]._id],
            temperaments: [temperament[30]._id, temperament[7]._id, temperament[24]._id, temperament[43]._id, temperament[31]._id, temperament[37]._id]
        },
        {
            name: "Labrador Retriever",
            size: "Medium",
            hypoallergenic: false,
            colors: [color[5]._id, color[0]._id, color[15]._id],
            temperaments: [temperament[30]._id, temperament[4]._id, temperament[45]._id, temperament[43]._id, temperament[52]._id, temperament[74]._id, temperament[37]._id]
        },
        {
            name: "Golden Retriever",
            size: "Medium",
            hypoallergenic: false,
            colors: [color[2]._id],
            temperaments: [temperament[35]._id, temperament[43]._id, temperament[59]._id, temperament[45]._id, temperament[21]._id, temperament[74]._id]
        },
        {
            name: "Chihuahua",
            size: "Small",
            hypoallergenic: false,
            colors: [color[5]._id, color[7]._id, color[4]._id, color[0]._id, color[3]._id, color[2]._id],
            temperaments: [temperament[25]._id, temperament[46]._id, temperament[5]._id, temperament[20]._id, temperament[57]._id]
        },
        {
            name: "Siberian Husky",
            size: "Medium",
            hypoallergenic: false,
            colors: [color[5]._id, color[7]._id, color[10]._id, color[16]._id, color[11]._id, color[9]._id, color[1]._id],
            temperaments: [temperament[35]._id, temperament[43]._id, temperament[52]._id, temperament[5]._id, temperament[37]._id]
        },
        {
            name: "Dachshund",
            size: "Small",
            hypoallergenic: false,
            colors: [color[5]._id, color[10]._id, color[0]._id, color[3]._id, color[6]._id, color[1]._id],
            temperaments: [temperament[18]._id, temperament[68]._id, temperament[25]._id, temperament[46]._id, temperament[54]._id, temperament[20]._id]
        },
        {
            name: "French Bulldog",
            size: "Small",
            hypoallergenic: false,
            colors: [color[4]._id, color[13]._id, color[7]._id, color[10]._id],
            temperaments: [temperament[28]._id, temperament[2]._id, temperament[46]._id, temperament[64]._id, temperament[44]._id, temperament[13]._id, temperament[53]._id, temperament[5]._id, temperament[54]._id, temperament[8]._id]
        },
        {
            name: "Great Dane",
            size: "Large",
            hypoallergenic: false,
            colors: [color[5]._id, color[13]._id, color[4]._id, color[18]._id, color[6]._id, color[17]._id],
            temperaments: [temperament[25]._id, temperament[35]._id, temperament[61]._id, temperament[21]._id, temperament[48]._id, temperament[37]._id]
        },
        {
            name: "Greyhound",
            size: "Large",
            hypoallergenic: false,
            colors: [color[5]._id, color[13]._id, color[4]._id, color[7]._id, color[6]._id, color[1]._id],
            temperaments: [temperament[30]._id, temperament[2]._id, temperament[43]._id, temperament[37]._id, temperament[8]._id, temperament[57]._id]
        },
        {
            name: "Rottweiler",
            size: "Large",
            hypoallergenic: false,
            colors: [color[5]._id, color[10]._id, color[19]._id],
            temperaments: [temperament[38]._id, temperament[25]._id, temperament[50]._id, temperament[34]._id, temperament[66]._id, temperament[5]._id, temperament[62]._id, temperament[21]._id, temperament[20]._id, temperament[14]._id]
        },
        {
            name: "Dobermann",
            size: "Large",
            hypoallergenic: false,
            colors: [color[7]._id, color[5]._id, color[4]._id, color[1]._id, color[6]._id, color[20]._id],
            temperaments: [temperament[29]._id, temperament[50]._id, temperament[43]._id, temperament[34]._id, temperament[5]._id, temperament[48]._id, temperament[21]._id]
        },
        {
            name: "Basenji",
            size: "Small",
            hypoallergenic: true,
            colors: [color[5]._id, color[13]._id, color[14]._id, color[10]._id, color[7]._id, color[1]._id],
            temperaments: [temperament[2]._id, temperament[29]._id, temperament[43]._id, temperament[23]._id, temperament[5]._id, temperament[54]._id, temperament[21]._id, temperament[58]._id]
        },
        {
            name: "Giant Schnauzer",
            size: "Large",
            hypoallergenic: true,
            colors: [color[5]._id, color[7]._id, color[11]._id],
            temperaments: [temperament[67]._id, temperament[43]._id, temperament[45]._id, temperament[47]._id, temperament[56]._id]
        },
        {
            name: "Maltese",
            size: "Small",
            hypoallergenic: true,
            colors: [color[7]._id, color[3]._id],
            temperaments: [temperament[27]._id, temperament[28]._id, temperament[2]._id, temperament[43]._id, temperament[46]._id, temperament[34]._id, temperament[70]._id, temperament[61]._id, temperament[54]._id, temperament[37]._id, temperament[0]._id]
        },
        {
            name: "Barbet",
            size: "Medium",
            hypoallergenic: true,
            colors: [color[7]._id, color[10]._id, color[8]._id, color[1]._id, color[14]._id],
            temperaments: [temperament[50]._id, temperament[43]._id]
        }
    ]);

    await Dog.deleteMany();
    const dog = await Dog.insertMany(
        [
            {
                name: "Austin",
                height: "28 inches",
                weight: "159 lbs",
                yearOfBirth: 2019,
                story: "Austin is easy-going, he loves taking walks and running in the park. He is protective loyal and very friendly with kids. Austin is looking for a good home to be a part of. Be sure to click the adopt me now button if you would like to have Austin has a member of your family",
                size: "Large",
                colors: [color[5]._id, color[2]._id, color[5]._id,],
                breed: [breed[9]._id],
                temperaments: [temperament[35]._id, temperament[61]._id, temperament[21]._id, temperament[48]._id],
                status: status[0]._id
            },
            {
                name: "Mya",
                height: "21 inches",
                weight: "48 lbs",
                yearOfBirth: 2015,
                story: "Mya is a very intelligent and gentle dog. She loves showing out her beautiful fur. Mya would be a great walk buddy. She enjoys playing outside especially when it snows. Mya is looking for a good home to be a part of. Be sure to click the adopt me now button if you would like to have Mya has a member of your family",
                size: "Medium",
                colors: [color[5]._id, color[10]._id, color[11]._id, color[7]._id,],
                breed: [breed[6]._id],
                temperaments: [temperament[52]._id, temperament[43]._id, temperament[5]._id, temperament[35]._id],
                status: status[0]._id
            },
            {
                name: "Jack",
                height: "13 inches",
                weight: "20 lbs",
                yearOfBirth: 2017,
                story: "Jack is a very intelligent and gentle dog. He enjoys taking walks and running in the park. Jack is even tempered and great with kids. Jack is looking for a good home to be a part of. Be sure to click the adopt me now button if you would like to have Jack has a member of your family",
                size: "Small",
                colors: [color[5]._id, color[7]._id, color[10]._id,],
                breed: [breed[2]._id],
                temperaments: [temperament[30]._id, temperament[7]._id, temperament[43]._id, temperament[37]._id],
                status: status[0]._id
            },
            {
                name: "Khloe",
                height: "21 inches",
                weight: "62 lbs",
                yearOfBirth: 2017,
                story: "Are you looking for a reliable and confident dog, then Khloe is a match. She is intelligent, and friendly. She enjoys taking walks. Khloe is great with kids and would be an amazing addition to any home. Be sure to click the adopt me now button if you would like to have Khloe has a member of your family",
                size: "Medium",
                colors: [color[2]._id],
                breed: [breed[4]._id],
                temperaments: [temperament[59]._id, temperament[21]._id, temperament[43]._id, temperament[35]._id],
                status: status[0]._id
            },
            {
                name: "Jasper",
                height: "26 inches",
                weight: "20 lbs",
                yearOfBirth: 2017,
                story: "Jack is a very intelligent and gentle dog. He enjoys taking walks and running in the park. Jack is even tempered and great with kids. Jack is looking for a good home to be a part of. Be sure to click the adopt me now button if you would like to have Jack has a member of your family",
                size: "Small",
                colors: [color[5]._id, color[7]._id, color[10]._id,],
                breed: [breed[2]._id],
                temperaments: [temperament[30]._id, temperament[7]._id, temperament[43]._id, temperament[37]._id],
                status: status[0]._id
            },
        ]
    )
})