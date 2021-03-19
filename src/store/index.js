import { createStore } from 'vuex'

const store = {
  state: {
    uiState: 'start',
    characterChoices: ['baker', 'mechanic', 'artist'],
    character: '',
    questionIndex: 0,
    score: 0,
    bottomClipPathY: 546.5,
    topClipPathY: 69.5,
    questions: [
      {
        question: `What's your dog's name?`,
        baker: "Woofgang Puck",
        mechanic: "Alf",
        artist: "Salvador Dogi",
      },
      {
        question: `What's your favorite hobby?`,
        baker: "Extreme ironing",
        mechanic: "Bacon santa cosplay",
        artist: "Mimosas",
      },
      {
        question: `What's your favorite color?`,
        baker: "turquoise",
        mechanic: "yellow",
        artist: "transparent",
      },
      {
        question: `Is cereal soup?`,
        baker: "You can't be serieal",
        mechanic: "Yes, I am Jason Lengstorf",
        artist: "wut",
      },
      {
        question: `What’s the most imaginative insult you can come up with?`,
        baker: "You're a substitute teacher with no lesson plan",
        mechanic: "Yer face is a melted welly",
        artist: "You eat buttons off the remote",
      },
      {
        question: `If peanut butter wasn’t called peanut butter, what would it be called?`,
        baker: "legoome",
        mechanic: "brown paste",
        artist: "groundnut smoosh",
      },
    ],
  },
  mutations: {
    pickCharactaer(state, character) {
      state.character = character
    },
    updateUiState(state, uiState) {
      state.uiState = uiState
    },
    selectAnswer(state, char) {
      if(char === state.character) {
        state.score += 16
        state.bottomClipPathY -= 50
        state.topClipPathY -= 50
      } else {
        state.score -= 16
        state.bottomClipPathY += 50
        state.topClipPathY += 50
      }

      if (state.questionIndex < (state.questions.length - 1)) {
        state.questionIndex++
      }

      if (state.questionIndex === (state.questions.length - 1)) {
        Math.sign(state.score) > 0 ? state.uiState = 'won' : state.uiState = 'lost'
      }
    },

    startOver(state) {
      state.uiState = 'start'
      state.character = ''
      state.questionIndex = 0
      state.score = 0
      state.bottomClipPathY = 546.5
      state.topClipPathY = 69.5
    }
  }
}

export default createStore(store)