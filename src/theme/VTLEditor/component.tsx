import React, { useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { AntlrEditor } from './components';
import { useColorMode } from '@docusaurus/theme-common';
import { getSuggestions } from './vtl-suggestions';

export interface EditorProps {
	script: string;
	tools: any;
}

const WrappedEditor = ({ script: initScript }: EditorProps) => (
	<BrowserOnly fallback={<div>Loading...</div>}>
		{() => {
			const tools = require('vtl-2-0-antlr-tools-ts');
			return <Editor script={initScript} tools={tools} />;
		}}
	</BrowserOnly>
);

const Editor = ({ script: initScript, tools }: EditorProps) => {
	const [script, setScript] = useState(() => initScript);
	const [errors, setErrors] = useState([]);

	const { colorMode } = useColorMode();
	const isDarkTheme = colorMode === 'dark';

	const customTools = { ...tools, getSuggestionsFromRange: getSuggestions };

	return (
		<>
			<AntlrEditor
				script={script}
				setScript={setScript}
				tools={customTools}
				options={{
					theme: isDarkTheme ? 'vs-dark' : 'vs-light',
					style: {
						height: '100px',
						// width: '80%',
						border: 'solid 2px black',
						borderRadius: '5px',
					},
				}}
				onListErrors={setErrors}
			/>
			{errors.length > 0 && (
				<ul style={{ backgroundColor: 'red' }}>
					{errors.map(({ column, line, message }: any, i) => (
						<li key={i}>{`Line ${line} - Column ${column}: ${message}`}</li>
					))}
				</ul>
			)}
		</>
	);
};

export default WrappedEditor;
