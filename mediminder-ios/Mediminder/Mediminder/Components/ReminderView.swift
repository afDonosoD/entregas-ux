//
//  ReminderView.swift
//  Mediminder
//
//  Created by Andres Donoso on 23/09/25.
//

import SwiftUI

struct ReminderView: View {
	var body: some View {
		HStack(spacing: 8) {
			ZStack {
				RoundedRectangle(cornerRadius: 8)
					.frame(width: 28, height: 28)
					.foregroundStyle(.accent)
					.shadow(color: Color(red: 0, green: 0.27, blue: 0.62).opacity(0.2), radius: 10, x: 0, y: 4)

				Image(systemName: "pill.fill")
					.font(.system(size: 16))
					.foregroundStyle(
						LinearGradient(
							stops: [
								.init(
									color: .white.opacity(0.9),
									location: 0.5
								),
								.init(color: .white.opacity(0), location: 1),
							],
							startPoint: .topLeading,
							endPoint: .bottomTrailing
						)
					)
			} //: Icon ZStack
			
			VStack(alignment: .leading) {
				Text("Acetaminofén")
					.customTitle2()
				
				Text("1 pastilla")
					.foregroundStyle(.secondary)
					.customBody()
			}
			
			Spacer()
			
			HStack(spacing: 0) {
				VStack(spacing: 3) {
					Image(systemName: "clock.arrow.trianglehead.clockwise.rotate.90.path.dotted")
						.font(.system(size: 16))
						.foregroundStyle(.warningDark)
						.frame(width: 31, height: 31)
						.background(Color.warningLight)
						.clipShape(Circle())
					
					Text("Posponer")
						.font(.system(size: 12, design: .rounded))
				}
				
				Spacer()
				
				VStack(spacing: 3) {
					Image(systemName: "chevron.forward.2")
						.font(.system(size: 16))
						.foregroundStyle(.accent)
						.frame(width: 31, height: 31)
						.background(Color.primaryLight)
						.clipShape(Circle())
					
					Text("Saltar")
						.font(.system(size: 12, design: .rounded))
				}
				
				Spacer()
				
				VStack(spacing: 3) {
					Image(systemName: "checkmark")
						.font(.system(size: 16))
						.foregroundStyle(.successDark)
						.frame(width: 31, height: 31)
						.background(Color.successLight)
						.clipShape(Circle())
					
					Text("Completar")
						.font(.system(size: 12, design: .rounded))
						.lineLimit(1)
						.minimumScaleFactor(0.5)
				}
			} //: Actions HStack
		} //: Card HStack
		.padding(.horizontal, 16)
		.padding(.vertical, 8)
		.background {
			RoundedRectangle(cornerRadius: 20)
				.foregroundStyle(.white)
				.shadow(color: .black.opacity(0.2), radius: 7.5, x: 0, y: 4)
		}
	}
}

#Preview(traits: .sizeThatFitsLayout) {
	ReminderView()
		.padding()
}
