<template>
  <v-row justify="center">

    <v-dialog
        v-model="dialog"
        persistent
        :width="this.width"
        :height="this.height"
        draggable
        :class="{ minimizeClass: minimize, resizeClass:resize }"
    >
      <template v-slot:activator="{ props }">
        <v-btn
            color="primary"
            v-bind="props"
        >
          Open Dialog
        </v-btn>
      </template>
      <div ref="draggableContainer" id="draggable-container">
        <div id="draggable-header" @mousedown="dragMouseDown">
          <v-card>
            <v-card-title>
              <v-icon color="red" @click="this.dialog = false" size="large">mdi-close</v-icon>
              <v-icon size="32" @click="resizeWindow">mdi-checkbox-blank-outline</v-icon>



              <v-icon size="32"
                      @click="minimizeWindow"
                      :class="{ maximizeClass: maximize }"
              >mdi-minus
              </v-icon>
              <v-icon
                  @click="minimizeWindow"
                  :class="{ minimizeClass: minimize }"
                  style="display: none"
              >
                mdi-chevron-up
              </v-icon>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                      cols="12"
                      sm="6"
                      md="4"
                  >
                    <v-text-field
                        label="Legal first name*"
                        required
                    ></v-text-field>
                  </v-col>
                  <v-col
                      cols="12"
                      sm="6"
                      md="4"
                  >
                    <v-text-field
                        label="Legal middle name"
                        hint="example of helper text only on focus"
                    ></v-text-field>
                  </v-col>
                  <v-col
                      cols="12"
                      sm="6"
                      md="4"
                  >
                    <v-text-field
                        label="Legal last name*"
                        hint="example of persistent helper text"
                        persistent-hint
                        required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                        label="Email*"
                        required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                        label="Password*"
                        type="password"
                        required
                    ></v-text-field>
                  </v-col>
                  <v-col
                      cols="12"
                      sm="6"
                  >
                    <v-select
                        :items="['0-17', '18-29', '30-54', '54+']"
                        label="Age*"
                        required
                    ></v-select>
                  </v-col>
                  <v-col
                      cols="12"
                      sm="6"
                  >
                    <v-autocomplete
                        :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                        label="Interests"
                        multiple
                    ></v-autocomplete>
                  </v-col>
                </v-row>
              </v-container>
              <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                  color="blue-darken-1"
                  variant="text"
                  @click="dialog = false"
              >
                Close
              </v-btn>
              <v-btn
                  color="blue-darken-1"
                  variant="text"
                  @click="dialog = false"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </div>

    </v-dialog>
  </v-row>
</template>
<script>
import draggable from 'vuedraggable';
export default {
  components: {
    draggable,
  },
  name: 'DraggableDiv',
  data: () => ({
    positions: {
      clientX: undefined,
      clientY: undefined,
      movementX: 0,
      movementY: 0
    },
    dialog: false,
    width: 1024,
    height: 800,
    resize: false,
    minimize : false,
    maximize : false
  }),
  methods:{
    resizeWindow(){
      switch (this.resize){
        case false:
          this.resize = true;
          break;
        case true:
          this.resize = false;
          break;
      }
    },
    minimizeWindow(){
      switch (this.minimize){
        case false:
          this.minimize = true;
          this.maximize = true;
          break;
        case true:
          this.minimize = false;
          this.maximize = false;
          break;
      }
    },
    dragMouseDown: function (event) {
      event.preventDefault()
      // get the mouse cursor position at startup:
      this.positions.clientX = event.clientX
      this.positions.clientY = event.clientY
      document.onmousemove = this.elementDrag
      document.onmouseup = this.closeDragElement
    },
    elementDrag: function (event) {
      event.preventDefault()
      this.positions.movementX = this.positions.clientX - event.clientX
      this.positions.movementY = this.positions.clientY - event.clientY
      this.positions.clientX = event.clientX
      this.positions.clientY = event.clientY
      // set the element's new position:
      this.$refs.draggableContainer.style.top = (this.$refs.draggableContainer.offsetTop - this.positions.movementY) + 'px'
      this.$refs.draggableContainer.style.left = (this.$refs.draggableContainer.offsetLeft - this.positions.movementX) + 'px'
    },
    closeDragElement () {
      document.onmouseup = null
      document.onmousemove = null
    }
  }
}
</script>
<style>
  .resizeClass .v-overlay__content,.resizeClass .v-overlay__content .v-card{
    width: 100%!important;
    height: 100%!important;
  }
  .minimizeClass{display: inline-block!important;}
  .maximizeClass{display: none!important;}
  .minimizeClass .v-overlay__content{
    width: 300px!important;
    height: 60px!important;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  #draggable-container {
    position: absolute;
    z-index: 9;
  }
  #draggable-header {
    z-index: 10;
  }
</style>

