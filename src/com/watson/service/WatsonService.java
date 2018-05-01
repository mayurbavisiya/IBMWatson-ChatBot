package com.watson.service;

import java.io.IOException;
import java.util.Calendar;
import java.util.HashMap;
import java.util.Map;
import java.util.TimeZone;

import com.ibm.watson.developer_cloud.conversation.v1.ConversationService;
import com.ibm.watson.developer_cloud.conversation.v1.model.MessageRequest;
import com.ibm.watson.developer_cloud.conversation.v1.model.MessageResponse;
import com.watson.util.WatsonConstant;

public class WatsonService {

	public static String callWatsonService(String input, String userName) {
		String responseMessage = "";
		try {
			MessageResponse response = null;
			Map<String, Object> context = new HashMap<String, Object>();
			TimeZone timeZone = TimeZone.getDefault();
			// Add userName to context to be used by Conversation.
			context.put("userName", userName);
			context.put("currentTime", Calendar.getInstance(timeZone).getTime().toString());
			context.put("timezone", timeZone.getID());
			response = conversationAPI(input, context);
			context = response.getContext();
			responseMessage = response.getText().get(0);
		} catch (Exception e) {
			responseMessage = "Sorry, Didn't get you !";
		}
		return responseMessage;
	}

	private static MessageResponse conversationAPI(String input, Map<String,Object> context) {
		ConversationService service = new ConversationService(ConversationService.VERSION_DATE_2016_07_11);
		// Credentials of Workspace of Conversation
		service.setUsernameAndPassword(WatsonConstant.watsonServiceUserName,WatsonConstant.watsonServicePasword);
		MessageRequest newMessage = new MessageRequest.Builder().inputText(input).context(context).build();
		// Workspace ID of Conversation current workspace		
		MessageResponse response = service.message(WatsonConstant.watsonServiceWorkSpaceId, newMessage).execute();
		return response;
	}
	
	public static void main(String[] args) throws IOException {
		System.out.println(callWatsonService("Hey",""));
	}

}
