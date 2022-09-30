import { Tooltip } from "bootstrap";
import { defineNuxtPlugin } from "#imports";

export default defineNuxtPlugin(() => ({ provide: { bootstrap: { Tooltip } } }));