<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	const close = () => dispatch('close');

	let modal;

	const handleKeydown = e => {
		if (e.key === 'Escape') {
			close();
			return;
		}
	};
</script>

<svelte:window on:keydown={handleKeydown}/>

<div class="modal-background" on:click={close}></div>

<div class="modal" role="dialog" aria-modal="true" bind:this={modal}>
	<slot name="header"></slot>
	<span class="modal-close" on:click={close}>x</span>
	<slot></slot>
</div>

<style>
	.modal-background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.3);
	}

	.modal {
		position: absolute;
		left: 50%;
		top: 50%;
		width: calc(100vw - 4em);
		max-width: 32em;
		max-height: calc(100vh - 4em);
		overflow: auto;
		transform: translate(-50%,-50%);
		padding: 1em;
		border-radius: 0.2em;
		background: white;
	}

	.modal-close {
		position: absolute;
    right: 8px;
		top: 6px;
		cursor: pointer;
	}

</style>
