import { Alert } from "react-native";
import * as FileSystem from 'expo-file-system';

export function useFiles() {
	async function convertFileBase64(fileUri: string) {
		const base64Img = await FileSystem
			.readAsStringAsync(fileUri, {
				encoding: FileSystem?.EncodingType?.Base64
			});
		return base64Img;
	};

	function getFileExtension(url: string) {
		const parts = url.split('.');
		return parts.length > 1 ? parts[parts.length - 1] : '';
	}

	async function saveBase64ToFile(base64Img: string) {
		try {
			const fileUri = `${FileSystem.documentDirectory}${Date.now()}.png`; // or any format
			await FileSystem.writeAsStringAsync(
				fileUri,
				base64Img,
				{
					encoding: FileSystem.EncodingType.Base64,
				}
			);
			return fileUri;
		} catch (error) {
			Alert.alert('Error al guardar el archivo', error.message);
			throw error;
		}
	}

	return {
		convertFileBase64,
		getFileExtension,
		saveBase64ToFile,
	}
}
