var Fool = {
    name : 'The Fool',
    desc : 'Young figure stands against a precipice with a bag over his shoulder and a clover in the other.  The sun shining brightly and they see mountains (challenges) in the distance.  A small white dog yapping at their feet.',
    number : 0,
    file : 'img/0_Fool.jpg',
    meaning : 'Beginnings, Innocence, Spontaneity, Free Spirit, Exuberance, Excitement, Anticipation, Potential',
    reverse : 'Trepidation, Holding Back, Recklessness, Risk-Taking, Daredevil, Imposter Syndrome, Procrastination',
    reference : 'Luke Skywalker in Star Wars, Dorothy Gale, Harry Potter, Red Riding Hood',
    element : 'Air',
    astrology : 'Uranus'

};

var Magician = {
    name : 'The Magician',
    desc : 'Robed Figure with the infinity symbol above their head.  Their left hand holds a scroll, pointing above to the cosmos, as the left hand their right hand is pointing down to the earth.  They stand in front of a table that holds a cup, pentacle, sword, and rod.  Vines and flowers are in the foreground.',
    number : 1,
    file: 'img/1_Magician.jpg',
    meaning : 'resources, power, will, mastery, divine connection, as above so below, taking advantage of opportunity',
    reverse : 'sleight of hand, illusion, deception, wasted opportunity, creative or productive block',
    reference : 'Merlin, Gandalf, Dumbledore, The Doctor',
    element : 'Air',
    astrology : 'Mercury'
};

var HighPriestess = {
    name : 'The High Priestess',
    desc : 'A woman sits in front of a veil between the black pillar of strength (Boaz) and white pillar of establishment (Jachin).  She wears the crown of Isis, has a cross around her neck and a crescent at her feet',
    number : 2,
    file: 'img/2_HighPriestess.jpg',
    meaning : 'intuition, spiritual mystery, the divine feminine, old power, hidden knowledge, guide, mentor, privacy',
    reverse : 'doubt, insecurity, mansplaining, gaslighting, gossip, hidden agenda, uncentered, repressed ',
    reference : 'Virgin Mary, Mother Theresa, Glinda the Good Witch, Wicked Witch of the West, Galadriel',
    element : 'Water',
    astrology : 'Moon'
};
var Empress = {
    name : 'The Empress',
    desc : 'A crowned woman, holding a scepter, is seated surrounded by nature.  Waterfalls and trees surround her.  At her feet is the heart symbol with the sign for a woman inside it',
    number : 3,
    file: 'img/3_Empress.jpg',
    meaning : 'mother, nature, fertility, creativity, nurturing, caring, wealth and abundance, sensuality, success from relationships ',
    reverse : 'exhausted resources, busybody, codependent, dysphoria, disconnected to nature, smothering ',
    reference : 'Beyonce, Maria Von Trapp, Claire Huxtable, Queen Elizabeth, Molly Weasley',
    element : 'Earth',
    astrology : 'Venus'
};

var Emperor = {
    name : 'The Emperor',
    desc : 'A crowned man in armor sits on a stone throne adorned with four sculpted ram\'s heads.  In his left hand he holds the world.  In his right hand he holds an ankh sceptor. Barren mountains tower behind him with a thin river flowing between. ',
    number : 4,
    file: 'img/4_Emperor.jpg',
    meaning : 'father, industry, authority, control, organization, order, systemic structure, capitalism, discipline, routine',
    reverse : 'tyranny, ruthlessness, bureocracy, imperialism, colonization, capitalism',
    reference : 'Alexander the Great, Barack Obama, Russell Simmons, Bill Gates',
    element : 'Fire',
    astrology : 'Aries'
};

var Hierophant = {
    name : 'The Hierophant',
    desc : 'A robed man wearing a crown of crosses sits behind two pillars.  He holds a sceptor in his right hand. He holds his left hand up in a gesture of benediction.  Two keys are crossed at his feet.  Two figures pray towards him in front of the pillars.',
    number : 5,
    file: 'img/5_Hierophant.jpg',
    meaning : 'organized religion, dogma, hierarchy, convention, safe, traditional',
    reverse : 'rebellion, change from within the system, group think, instition over individual, innovation',
    reference : 'The Pope, Roger Goodell, The Wizard (Oz)',
    element : 'Earth',
    astrology : 'Taurus'
};

var Lovers = {
    name : 'The Lovers',
    desc : 'A naked man and woman are exteding their hands towards each other.  Behind the woman is a fruit tree with a snake.  Behind the man is a tree of fire with 12 flames.  An angel is above the scene looking toward the viewer with open arms',
    number : 6,
    file: 'img/6_Lovers.jpg',
    meaning : 'harmony, love, fated relationship, passionate connection, sensuality, passion, temptation, personal choice, dilemma',
    reverse : 'disharmony, binging, distance, conflict, succumbing to temptation',
    reference : 'Adam & Eve, Romeo & Juliet, Meredith & Christina',
    element : 'Air',
    astrology : 'Gemini'
};
var Chariot = {
    name : 'The Chariot',
    desc : 'An armored figure rides in a chariot pulled by two sphinxes. He is riding away from a city and holds a spear in his left hand.',
    number : 7,
    file: 'img/7_Chariot.jpg',
    meaning : 'purpose, industrious, journey, control, self discipline, ambition, determination, fighting for a higher purpose',
    reverse : 'reckless, headstrong, unrestrained, out of control',
    reference : 'Buffy the Vampire Slayer, Princess Leia, Hermione, Harriet Tubman, Greta Thunberg',
    element : 'Water',
    astrology : 'Cancer'
};
var Force = {
    name : 'Strength',
    desc : 'A young woman with an eternity symbol above her head gently holds the jaws of a lion.  The lion has roses threaded through his mane.  They are outdoors with trees and mountains in the background',
    number : 8,
    file: 'img/8_Strength.jpg',
    meaning : 'endurance, courage, inner power, fortitude, persuasion, influence, non-violent power',
    reverse : 'vulnerability, weakness, fear, doubt',
    reference : 'Malala Yousafza, Rosa Parks',
    element : 'Fire',
    astrology : 'Leo'
};

var Hermit = {
    name : 'The Hermit',
    desc : 'A hooded figure with a long white beard walks through the wilderness.  He holds up a lantern and walks with a cane.',
    number : 9,
    file: 'img/9_Hermit.jpg',
    meaning : 'seeker, retreat, contemplation, reflection, inner guidance, silence',
    reverse : 'avoidance, navel gazing, loneliness, lost, rejection, isolation',
    reference : 'Obi Wan Kenobi, Saint Frances',
    element : 'Earth',
    astrology : 'Virgo'
};
var Wheel = {
    name : 'Wheel of Fortune',
    desc : 'A giant wheel is surrounded by clouds.  Each corner of the card has a different winged animal - an angel, eagle, bull, and lion.  Each animal holds a scripture.  A winged sphinx stands at the top of the while the jackal god Anubis lays curled along the bottom of the wheel. The hebrew letters for the unpronouncable name of god are on the outer wheel.  The inner wheel has the alchemical symbles for mercury, sulphur, water and salt.',
    number : 10,
    file: 'img/10_WheelOfFortune.jpg',
    meaning : 'fate, destiny, luck, inevitability, change, cycles, karma, turning point, random',
    reverse : 'chaos, misfortune, unwillingness, forced change',
    reference : 'Serenity Prayer',
    element : 'Fire',
    astrology : 'Jupiter'
};
var Justice = {
    name : 'Justice',
    desc : 'A woman with a crown sits in front of two pillars with a purple curtain behind her.  In her left hand is a sword and in the other hand are scales on a balance.',
    number : 11,
    file: 'img/11_Justice.jpg',
    meaning : 'truth, fairness, justice, cause and effect,law, integrity',
    reverse : 'unfairness, dishonesty, lack of accountability, taking advantage of the law, scam',
    reference : 'Nancy Drew, Ruth Bader Ginsberg',
    element : 'Air',
    astrology : 'Libra'
};
var HangedMan = {
    name : 'The Hanged Man',
    desc : 'A figure is suspended by his right foot, tied to two crossed trees.  The figures left leg is bent, folded behind its right thigh.  His arms are bent with his hands tied behind his back, forming an inverted triangle.  The figure gazes peacefully towards the front with a nimbus of light around his head',
    number : 12,
    file: 'img/12_HangedMan.jpg',
    meaning : 'surrender, suspension, waiting, pause, sabbatical, rest, meditation, reflection',
    reverse : 'stuck, restricted, frustrated, stalling, apathy, needless sacrifice',
    reference : 'Frozen Han Solo',
    element : 'Water',
    astrology : 'Neptune'
};
var Death = {
    name : 'Death',
    desc : 'A skeletal figure in black armor charges towards a gathering of people.  The figure carries a white flag.  A religous figure remonstrates at Death while children kneel.  Another figure lies on the ground with a crown beside him.  A river with a boat is in the background and leads to two towers that surround a setting sun.',
    number : 13,
    file: 'img/13_Death.jpg',
    meaning : 'transition, change, loss, rebirth, metamorphosis, legacy',
    reverse : 'resisting change, stagnation, decay',
    reference : 'Rock Bottom, Postcards From the Edge',
    element : 'Water',
    astrology : 'Scorpio'
};
var Temperance = {
    name : 'Temperance',
    desc : 'An angel stands with one foot in the river and one foot on the land.  She holds two cups and water flows between them.  There is a path in the background, leading through green fields to mountainsa and a rising sun ',
    number : 14,
    file: 'img/14_Temperance.jpg',
    meaning : 'balance, harmony, testing the water, deliberation, life\'s purpose',
    reverse : 'imbalance, anxiety, extremes, excess',
    reference : 'John Lewis',
    element : 'Fire',
    astrology : 'Sagittarius'
};
var Devil = {
    name : 'The Devil',
    desc : 'A horned and winged satyr stands on a square block.  A naked man and woman are chained by the neck to the block that the Devil stands upon.  They are a reflection of the Lovers card and wear horns and a tail. Her tail is tipped with fruit and his with flame. The devil\'s left hand is raised in a Jewish blessing.  The Devil\'s right hand is holding a torch and pointing to the ground.',
    number : 15,
    file: 'img/15_Devil.jpg',
    meaning : 'Addiction, dependency, oppression, enslavement, instant gratification, self-destruction, shadow self, hiding or passing',
    reverse : 'release, resistance, sobriety, coming out, shameful secrets, detachment',
    reference : 'Darth Vader, Dracula',
    element : 'Earth',
    astrology : 'Capricorn'
};

var Tower = {
    name : 'The Tower',
    desc : 'A massive tower on top of a rocky mountain is crumbling and on fire.  A man and woman are falling from the tower.  Lightning strikes the top of the tower. A crown tumbles from the sky, torn from the top of the tower.',
    number : 16,
    file: 'img/16_Tower.jpg',
    meaning : 'catastrophe, instutitional and foundational change, upheaval, destruction ',
    reverse : 'disaster averted, fear of suffering, head in the sand, clinging to the old ways',
    reference : 'Septemper 11th Twin Towers, Coronavirus, Zombie Apocolypse',
    element : 'Fire',
    astrology : 'Mars'
};

var Star = {
    name : 'The Star',
    desc : 'A naked woman rests on one knee as.  She pours water from two cups. One cup on the land and one cup in a pool of water.  She is in a field with flowers a tree and mountains in the background.  Stars circle around her in the night sky.',
    number : 17,
    file: 'img/17_Star.jpg',
    meaning : 'the source, hope, renewal, faith ',
    reverse : 'discouraged, hopeless, clinging to light',
    reference : 'The Big Bang, The Milky Way',
    element : 'Air',
    astrology : 'Aquarius'
};
var Moon = {
    name : 'The Moon',
    desc : 'The full moon illuminates a path that winds past a wolf and a dog, between two towers, and into the mountains. A crayfish crawls out of water at the end or beginning of the path.',
    number : 18,
    file: 'img/18_Moon.jpg',
    meaning : 'reflection, duality, illusion, follow your intuition',
    reverse : 'mirage, anxiety, fear, confusion, distortion, paranoia, trickery, misinterpretation',
    reference : 'Orphan Black',
    element : 'Water',
    astrology : 'Pisces'
};
var Sun = {
    name : 'The Sun',
    desc : 'A toddler rides a running horse while holding a flowing red banner.  There is a wall with flowers growing above it behind the toddler.  The sun shines strongly in the background.',
    number : 19,
    file: 'img/19_Sun.jpg',
    meaning : 'victory, joy, confidence, happiness, innocence, dawn, enthusiasm',
    reverse : 'unrealistic expectation, ignoring obstacles, negativity, sadness',
    reference : '',
    element : 'Air',
    astrology : 'Sun'
};

var Judgement = {
    name : 'Judgement',
    desc : 'An angel blows a trumpet from the heavens.  The angel looks down on a man woman and child who are standing in open coffins with their hands raised towards the sky.  A tidal wave crests in the background.',
    number : 20,
    file: 'img/20_Judgement.jpg',
    meaning : 'spiritual awakening, resurrection, absolution, calling, higher purpose',
    reverse : 'ignoring the call, self doubt, missed opportunities, self loathing',
    reference : '',
    element : 'Fire',
    astrology : 'Pluto'
};
var Globe = {
    name : 'The World',
    desc : 'A naked woman twirls and dances inside a laurel wreath in the heavens. The head of a man, bull, lion and eagle are presented in each corner of the card.  ',
    number : 21,
    file: 'img/21_World.jpg',
    meaning : 'completion, accomplishment, achievement, fullfillment, full-circle',
    reverse : 'looking for closure, loose ends, short cut, unfinished project, going in circles',
    reference : '',
    element : 'Earth',
    astrology : 'Saturn'
};
/*var MajorCard = {
    name : '',
    desc : '',
    number : 0,
    file: '',
    meaning : '',
    reverse : '',
    reference : '',
    element : '',
    astrology : ''
};*/
var MajorArcana = [Fool, Magician, HighPriestess, Empress, Emperor, Hierophant, Lovers, Chariot, Force, Hermit, Wheel, Justice, HangedMan, Death, Temperance, Devil, Tower, Star, Moon, Sun, Judgement, Globe];