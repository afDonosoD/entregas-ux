//
//  ReminderDetailView.swift
//  Mediminder
//
//  Created by Andres Donoso on 24/09/25.
//

import SwiftUI

struct ReminderDetailView: View {
	var onCancel: () -> Void
	
	let schedule:
		[(time: String, days: [(id: Int, dayName: String, colored: Bool)])] = [
			(
				"9:00 a.m.",
				[
					(1, "L", true),
					(2, "M", true),
					(3, "M", false),
					(4, "J", false),
					(5, "V", true),
					(6, "S", true),
					(7, "D", true),
				],
			),
			(
				"10:00 a.m.",
				[
					(1, "L", true),
					(2, "M", true),
					(3, "M", false),
					(4, "J", false),
					(5, "V", true),
					(6, "S", true),
					(7, "D", true),
				],
			),
			(
				"11:00 a.m.",
				[
					(1, "L", true),
					(2, "M", true),
					(3, "M", false),
					(4, "J", false),
					(5, "V", true),
					(6, "S", true),
					(7, "D", true),
				],
			),
		]

	var body: some View {
		NavigationStack {
			GeometryReader { proxy in
				VStack(alignment: .leading, spacing: 30) {
					HStack(spacing: 8) {
						ZStack {
							RoundedRectangle(cornerRadius: 8)
								.frame(width: 28, height: 28)
								.foregroundStyle(.accent)
								.shadow(
									color: Color(red: 0, green: 0.27, blue: 0.62)
										.opacity(0.2),
									radius: 10,
									x: 0,
									y: 4
								)
							
							Image(systemName: "pill.fill")
								.font(.system(size: 16))
								.foregroundStyle(
									LinearGradient(
										stops: [
											.init(
												color: .white.opacity(0.9),
												location: 0.5
											),
											.init(
												color: .white.opacity(0),
												location: 1
											),
										],
										startPoint: .topLeading,
										endPoint: .bottomTrailing
									)
								)
						}  //: Icon ZStack
						
						Text("Acetaminofén")
							.customTitle2()
							.fontWeight(.bold)
					}
					
					HStack {
						Spacer()
						
						VStack(spacing: 3) {
							Image(
								systemName:
									"clock.arrow.trianglehead.clockwise.rotate.90.path.dotted"
							)
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
						}
						
						Spacer()
					}  //: Actions HStack
					
					VStack(alignment: .leading, spacing: 8) {
						Text("Dosis")
							.customBody()
							.fontWeight(.bold)
						
						Text("1 pastilla")
					}
					
					VStack(alignment: .leading, spacing: 8) {
						Text("Horario")
							.customBody()
							.fontWeight(.bold)
						
						Grid(alignment: .leading, verticalSpacing: 16) {
							GridRow {
								Text("Hora")
								
								Text("Dias")
							}
							
							ForEach(schedule, id: \.time) { scheduleItem in
								GridRow {
									Text(scheduleItem.time)
									
									DaysView(
										days: scheduleItem.days,
										showDeleteButton: false
									)
								}
							}
						}
					}  //: Schedule VStack
				}  //: VStack
				.padding(.horizontal, 25)
				.safeAreaInset(edge: .bottom) {
					VStack {
						Spacer()
						HStack(spacing: 8) {
							Spacer()
							
							Button(action: {}) {
								Image(systemName: "trash")
									.font(.system(size: 20))
									.foregroundStyle(.white)
							}
							.frame(width: 40, height: 40)
							.background(Color.danger)
							.clipShape(Circle())
							
							Button(action: {}) {
								Image(systemName: "pencil")
									.font(.system(size: 20))
									.foregroundStyle(.white)
							}
							.frame(width: 40, height: 40)
							.background(Color.accent)
							.clipShape(Circle())
						} //: HStack
						.padding(.horizontal, 22)
					} //: VStack
				}
			}  //: GeometryReader
			.navigationTitle("")
			.navigationBarTitleDisplayMode(.inline)
			.toolbar {
				ToolbarItem(placement: .principal) {
					Text("Recordatorio")
						.customSuperSmall()
				}
				
				ToolbarItem(placement: .destructiveAction) {
					Button(role: .cancel) {
						onCancel()
					} label: {
						Image(systemName: "xmark")
					}
				}
			}
		} //: NavigationStack
	}
}

#Preview {
	ReminderDetailView(onCancel: {})
}
