import { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 80 32"
			{...props}
		>
			<path
				fill="currentColor"
				d="M7.14 24.52c-1.443 0-2.7-.374-3.771-1.121-1.072-.748-1.906-1.745-2.504-2.99C.288 19.14 0 17.748 0 16.233c0-1.558.33-2.97.99-4.237a7.483 7.483 0 0 1 2.904-2.99c1.257-.748 2.762-1.122 4.513-1.122 1.772 0 3.266.374 4.482 1.121a7.391 7.391 0 0 1 2.781 3.022c.64 1.267.958 2.669.958 4.206v7.912h-4.234v-2.648h-.062c-.309.561-.7 1.07-1.174 1.527-.454.457-1.01.82-1.67 1.09-.659.27-1.442.405-2.348.405Zm1.205-3.645c.824 0 1.535-.207 2.133-.623a3.906 3.906 0 0 0 1.36-1.682c.33-.727.494-1.526.494-2.399 0-.872-.165-1.65-.494-2.336a3.907 3.907 0 0 0-1.36-1.682c-.598-.416-1.309-.623-2.133-.623-.845 0-1.576.207-2.194.623a4.127 4.127 0 0 0-1.391 1.682c-.31.685-.464 1.464-.464 2.336 0 .873.155 1.672.464 2.4.33.705.793 1.266 1.39 1.681.619.416 1.35.623 2.195.623ZM20.637 24.146V8.26h4.265v15.887h-4.265ZM22.77 6.358c-.721 0-1.35-.26-1.886-.779-.515-.54-.772-1.173-.772-1.9 0-.727.257-1.35.772-1.869C21.42 1.27 22.05 1 22.77 1c.721 0 1.34.27 1.854.81.536.52.804 1.142.804 1.87 0 .726-.268 1.36-.804 1.9a2.52 2.52 0 0 1-1.854.778ZM37.037 7.885c1.34 0 2.524.218 3.555.654a6.828 6.828 0 0 1 2.596 1.807c.7.768 1.236 1.682 1.607 2.741.37 1.039.556 2.18.556 3.427 0 1.558-.32 2.939-.958 4.143a6.95 6.95 0 0 1-2.627 2.835c-1.133.686-2.473 1.028-4.018 1.028-.66 0-1.298-.093-1.916-.28a5.755 5.755 0 0 1-1.639-.81 5.301 5.301 0 0 1-1.205-1.246h-.03V31h-4.235V16.514c0-1.765.34-3.292 1.02-4.58.68-1.287 1.638-2.284 2.874-2.99 1.257-.706 2.73-1.06 4.42-1.06Zm0 3.645c-.824 0-1.545.207-2.163.623a4.127 4.127 0 0 0-1.391 1.682c-.31.706-.464 1.495-.464 2.367 0 .873.154 1.662.464 2.368.33.706.793 1.267 1.39 1.682.619.416 1.34.623 2.164.623.845 0 1.566-.207 2.164-.623a3.906 3.906 0 0 0 1.36-1.682c.33-.706.494-1.495.494-2.367 0-.873-.165-1.662-.494-2.368a3.907 3.907 0 0 0-1.36-1.682c-.598-.416-1.32-.623-2.164-.623ZM48.436 24.146V8.26h4.266v15.887h-4.266ZM50.57 6.358c-.721 0-1.35-.26-1.885-.779-.515-.54-.773-1.173-.773-1.9 0-.727.258-1.35.773-1.869.535-.54 1.164-.81 1.885-.81.721 0 1.34.27 1.854.81.536.52.804 1.142.804 1.87 0 .726-.268 1.36-.803 1.9a2.52 2.52 0 0 1-1.855.778ZM55.595 24.146l4.729-6.947a7.318 7.318 0 0 1-2.102-1.557 7.273 7.273 0 0 1-1.298-2.18 7.652 7.652 0 0 1-.433-2.587V8.26h4.234v2.616a3.594 3.594 0 0 0 1.267 2.741c.392.312.835.53 1.33.655l4.018-6.012h4.636l-4.543 6.666c.947.353 1.75.862 2.41 1.527a6.88 6.88 0 0 1 1.515 2.305c.35.851.525 1.765.525 2.741v2.648H67.65v-2.648c0-.623-.155-1.194-.464-1.713a3.319 3.319 0 0 0-1.205-1.246 3.12 3.12 0 0 0-1.67-.53l-4.08 6.137h-4.635ZM75.21 24.146V8.26h4.265v15.887h-4.266Zm2.132-17.788c-.721 0-1.35-.26-1.885-.779-.516-.54-.773-1.173-.773-1.9 0-.727.257-1.35.773-1.869.535-.54 1.164-.81 1.885-.81.721 0 1.34.27 1.854.81.536.52.804 1.142.804 1.87 0 .726-.268 1.36-.804 1.9a2.52 2.52 0 0 1-1.854.778Z"
			/>
		</svg>
	);
}
